import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import cookieParser from "cookie-parser";
import serviceRoutes from "./routes/service.routes";
import bookingsRoutes from "./routes/bookings.route";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000", // your Next app
    credentials: true, // IMPORTANT so cookies work cross-origin
  })
);

app.get("/health", (_req, res) => {
  res.json({ ok: true, message: "server running" });
});

app.use("/auth", authRoutes);
app.use("/services", serviceRoutes);
app.use("/bookings", bookingsRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
