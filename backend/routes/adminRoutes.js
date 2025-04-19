import express from "express";
import {
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} from "../controllers/adminController.js";


const router = express.Router();


router.get("/students", getAllStudents);
router.get("/students/:id", getStudentById);
router.put("/students/:id", updateStudentById);
router.delete("/students/:id", deleteStudentById);

export default router;
