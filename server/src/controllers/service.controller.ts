import { Response } from "express";
import { z } from "zod";
import { serviceService } from "../services/service.service";
import { AuthedRequest } from "../middleware/auth";

const createServiceSchema = z.object({
  title: z.string().min(2),
  description: z.string().optional(),
  durationMin: z.number().int().positive(),
  price: z.number().int().nonnegative(),
});

export const serviceController = {
  async createSerive(req: AuthedRequest, res: Response) {
    try {
      const userId = req.user!.userId;
      // validate the data
      const validatedData = createServiceSchema.parse(req.body);
      const { upgradedUser, newToken, service } = await serviceService.createService(userId, validatedData);

      // if we receive new token, meaning role was upgraded
      if (newToken) {
        res.cookie("token", newToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });
      }

      return res.status(201).json({ service, upgradedUser });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  },

  async listAll(_req: AuthedRequest, res: Response) {
    const services = await serviceService.listAllServices();
    return res.json(services);
  },

  async listMine(req: AuthedRequest, res: Response) {
    const services = await serviceService.listMyServices(req.user!.userId);
    return res.json(services);
  },
};
