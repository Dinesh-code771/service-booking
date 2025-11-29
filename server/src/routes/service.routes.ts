import { Router } from "express";
import { serviceController } from "../controllers/service.controller";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.get("/", serviceController.listAll);          // public
router.post("/", requireAuth, serviceController.createSerive); // protected
router.get("/me", requireAuth, serviceController.listMine);

export default router;
