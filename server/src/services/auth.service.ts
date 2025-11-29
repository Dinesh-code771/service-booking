import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userRepo } from "../repositories/user.repo";

export const authService = {
  async signup(input: { name: string; email: string; password: string }) {
    const existing = await userRepo.findByEmail(input.email);
    if (existing) {
      throw new Error("Email already in use");
    }

    const hashed = await bcrypt.hash(input.password, 10);

    const user = await userRepo.createUser({
      name: input.name,
      email: input.email,
      password: hashed,
    });

    return user;
  },

  async login(input: { email: string; password: string }) {
    const user = await userRepo.findByEmail(input.email);
    if (!user) throw new Error("Invalid credentials");

    const ok = await bcrypt.compare(input.password, user.password);
    if (!ok) throw new Error("Invalid credentials");

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  },
};
