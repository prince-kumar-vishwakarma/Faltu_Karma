import Student from "../models/studentModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });
    console.log("student", student);
    if (!student) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await student.comparePassword(password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: student._id, email: student.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      success: true,
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
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const registerStudent = async (req, res) => {
  const { enrollment, name, email, password, dob } = req.body;

  console.log(req.body)

  try {
    const existingStudent = await Student.findOne({
      email,
      $or: [{ enrollment }],
    });

    console.log("existingStudent " , existingStudent)
    if (existingStudent) { 
      return res
        .status(400)
        .json({
          success: false,
          message: "Student already exists with this email or enrollment",
        });
    }

    const newStudent = new Student({
      enrollment,
      name,
      email,
      password,
      dob,
    });

    await newStudent.save();

    const token = jwt.sign(
      { userId: newStudent._id, email: newStudent.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      success: true,
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
        success: false,
        message: "Duplicate field value entered",
        field: Object.keys(error.keyValue)[0],
      });
    }
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//get Student profile
export const getStudentProfile = async (req, res) => {
  try {
    // const student = await Student.findById(req.user.id).select("-password");
    const student = await Student.findById(req.params.id).select("-password");
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateStudentProfile = async (req, res) => {
  try {
    // const student = await Student.findById(req.user._id);
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    student.course = req.body.course || student.course;
    student.gender = req.body.gender || student.gender;
    student.sem = req.body.sem || student.sem;

    const updatedStudent = await student.save();

    res.json({
      _id: updatedStudent._id,
      studentID: updatedStudent.studentID,
      name: updatedStudent.name,
      email: updatedStudent.email,
      contactNumber: updatedStudent.contactNumber,
      dob: updatedStudent.dob,
      course: updatedStudent.course,
      gender: updatedStudent.gender,
      sem: updatedStudent.sem,
    });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};
