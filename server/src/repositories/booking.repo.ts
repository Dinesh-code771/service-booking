import { prisma } from "../lib/prisma";

export const bookingRepo = {
  createBooking(data: { userId: string; serviceId: string; date: Date }) {
    return prisma.booking.create({
      data,
    });
  },
  findMyBookings(userId: string) {
    return prisma.booking.findMany({
      where: { userId },
      include: { service: true },
      orderBy: { createdAt: "desc" },
    });
  },
  findProviderBookings(providerId: string) {
    return prisma.booking.findMany({
      where: { service: { ownerId: providerId } },
      include: {
        service: true,
        user: { select: { id: true, name: true, email: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  },
};
