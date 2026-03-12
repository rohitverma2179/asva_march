import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth.controller";

// Router initialize
const router = Router();

// Register route
// POST /api/auth/register
router.post("/register", registerUser);

// Login route
// POST /api/auth/login
router.post("/login", loginUser);

// Router export
export default router;
