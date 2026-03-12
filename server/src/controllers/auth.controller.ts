import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.model";

/**
 * Register User Controller
 */
export const registerUser = async (req: Request, res: Response) => {
  try {
    // Body se data nikal rahe hain
    console.log(req.body)
    const { email, phone, password, loginType, name } = req.body;

    console.log("Registering user:", req.body);

    // Validation: loginType required
    if (!loginType) {
      return res.status(400).json({ message: "loginType is required" });
    }

    // EMAIL login ke liye email + password required
    if (loginType === "EMAIL") {
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      // Check user already exist hai ya nahi
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Email already registered" });
      }
    }

    // PHONE login ke liye phone required
    if (loginType === "PHONE") {
      if (!phone) {
        return res.status(400).json({ message: "Phone is required" });
      }

      const existingUser = await User.findOne({ phone });
      if (existingUser) {
        return res.status(409).json({ message: "Phone already registered" });
      }
    }
    
    // Password ko hash kar rahe hain (sirf email login ke liye)
    let hashedPassword: string | undefined;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // New user create kar rahe hain
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      loginType,
    });

    // Response
    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

/**
 * Login User Controller
 */
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, phone, password, loginType } = req.body;

    // loginType required
    if (!loginType) {
      return res.status(400).json({ message: "loginType is required" });
    }

    let user;

    // EMAIL login
    if (loginType === "EMAIL") {
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      // User find kar rahe hain
      user = await User.findOne({ email });
      if (!user || !user.password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Password match check
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    }

    // PHONE login (OTP logic future me add hoga)
    if (loginType === "PHONE") {
      if (!phone) {
        return res.status(400).json({ message: "Phone is required" });
      }

      user = await User.findOne({ phone });
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
    }

    return res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};