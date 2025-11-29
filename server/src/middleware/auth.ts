import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthedRequest extends Request {
  user?: { userId: string; role: "CUSTOMER" | "PROVIDER" };
}

export function requireAuth(
  req: AuthedRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.token; // <-- from cookie-parser

  if (!token) {
    return res.status(401).json({ message: "Missing token" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as any;
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// Optional helper for provider-only routes
export function requireProvider(
  req: AuthedRequest,
  res: Response,
  next: NextFunction
) {
  if (req.user?.role !== "PROVIDER") {
    return res.status(403).json({ message: "Provider access only" });
  }
  next();
}
