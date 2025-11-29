import { bookingRepo } from "../repositories/booking.repo";

export const bookingService = {
  async create(userId: string, serviceId: string, date: Date) {
    try {
      const booking = await bookingRepo.createBooking({
        userId,
        serviceId,
        date,
      });
      return booking;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
  async findMyBookings(userId: string) {
    try {
      const bookings = await bookingRepo.findMyBookings(userId);
      return bookings;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
  async findProviderBookings(providerId: string) {
    try {
      const bookings = await bookingRepo.findProviderBookings(providerId);
      return bookings;
    } catch (err: any) {
      throw new Error(err.message);
    }
  },
};
