import Student from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await student.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: student._id, email: student.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: student._id,
        name: student.name,
        email: student.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const registerUser = async (req, res) => {
  const { studentID, name, contactNumber, email, password, course, year } =
    req.body;

  try {
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res
        .status(400)
        .json({ message: "Student already exists with this email" });
    }

    const newStudent = new Student({
      studentID,
      name,
      contactNumber,
      email,
      password,
      course,
      year,
    });

    await newStudent.save();

    // Create JWT token
    const token = jwt.sign(
      { userId: newStudent._id, email: newStudent.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "Student registered successfully",
      token,
      user: {
        id: newStudent._id,
        name: newStudent.name,
        email: newStudent.email,
      },
    });
  } catch (error) {
    console.error("Register Error:", error.message);
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Duplicate field value entered",
        field: Object.keys(error.keyValue)[0],
      });
    }
    res.status(500).json({ message: "Server error" });
  }
};
