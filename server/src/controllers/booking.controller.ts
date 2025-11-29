import { Response } from "express";
import { z } from "zod";
import { bookingService } from "../services/booking.service";
import { AuthedRequest } from "../middleware/auth";

const createBookingSchema = z.object({
  serviceId: z.string().min(1),
  date: z.date(),
});

export const bookingController = {
  async create(req: AuthedRequest, res: Response) {
    try {
      const data = createBookingSchema.parse(req.body);
      const booking = await bookingService.create(
        req.user!.userId,
        data.serviceId,
        data.date
      );
      return res.status(201).json(booking);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  },

  async mine(req: AuthedRequest, res: Response) {
    const bookings = await bookingService.findMyBookings(req.user!.userId);
    return res.json(bookings);
  },

  async provider(req: AuthedRequest, res: Response) {
    const bookings = await bookingService.findProviderBookings(
      req.user!.userId
    );
    return res.json(bookings);
  },
};
