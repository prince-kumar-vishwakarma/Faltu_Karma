import { Router } from "express";
import { loginStudent, registerStudent } from "../controllers/authController.js";

const router = Router();

router.post("/register", registerStudent);
router.post("/login", loginStudent);

export default router;