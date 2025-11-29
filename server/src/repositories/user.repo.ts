import { prisma } from "../lib/prisma";

export const userRepo = {
  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },

  createUser(data: { name: string; email: string; password: string }) {
    return prisma.user.create({
      data,
      select: { id: true, name: true, email: true, role: true },
    });
  },
};
