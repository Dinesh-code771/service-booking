import { prisma } from "../lib/prisma";
import jwt from "jsonwebtoken";

export const serviceService = {
  async createService(
    userId: string,
    input: {
      title: string;
      description?: string;
      durationMin: number;
      price: number;
    }
  ) {
    const result = await prisma.$transaction(async (tx) => {
      // 1) duplicate check
      const dup = await tx.service.findFirst({
        where: { ownerId: userId, title: input.title },
      });
      if (dup) {
        throw new Error("You already have a service with this title");
      }

      // 2) read current role
      const currentUser = await tx.user.findUnique({
        where: { id: userId },
        select: { role: true },
      });

      // 3) create service
      const service = await tx.service.create({
        data: { ...input, ownerId: userId },
      });

      // 4) upgrade role if needed
      let upgradedUser = null;
      let newToken: string | null = null;

      if (currentUser?.role === "CUSTOMER") {
        upgradedUser = await tx.user.update({
          where: { id: userId },
          data: { role: "PROVIDER" },
          select: { id: true, name: true, email: true, role: true },
        });

        // issue fresh JWT with new role
        newToken = jwt.sign(
          { userId, role: upgradedUser.role },
          process.env.JWT_SECRET!,
          { expiresIn: "7d" }
        );
      }

      return { service, upgradedUser, newToken };
    });

    return result;
  },

  listAllServices() {
    return prisma.service.findMany({
      orderBy: { createdAt: "desc" },
      include: { owner: { select: { id: true, name: true } } },
    });
  },

  listMyServices(userId: string) {
    return prisma.service.findMany({
      where: { ownerId: userId },
      orderBy: { createdAt: "desc" },
    });
  },
};
