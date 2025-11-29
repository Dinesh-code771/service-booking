import { Router } from "express";
import { requireAuth, requireProvider } from "../middleware/auth";
import { bookingController } from "../controllers/booking.controller";

const router = Router();

router.post("/", requireAuth, bookingController.create);
router.get("/me", requireAuth, bookingController.mine);

// provider-only view
router.get("/provider", requireAuth, requireProvider, bookingController.provider);

export default router;
