import { prisma } from "../lib/prisma";

export const serviceRepo = {
  findDuplicate(ownerId: string, title: string) {
    return prisma.service.findFirst({
      where: { ownerId, title },
    });
  },

  createService(data: {
    title: string;
    description?: string;
    durationMin: number;
    price: number;
    ownerId: string;
  }) {
    return prisma.service.create({
      data,
      select: {
        id: true,
        title: true,
        description: true,
        durationMin: true,
        price: true,
        ownerId: true,
        createdAt: true,
      },
    });
  },

  findAll() {
    return prisma.service.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        owner: { select: { id: true, name: true, email: true, role: true } },
      },
    });
  },

  findByOwner(ownerId: string) {
    return prisma.service.findMany({
      where: { ownerId },
      orderBy: { createdAt: "desc" },
    });
  },
};
