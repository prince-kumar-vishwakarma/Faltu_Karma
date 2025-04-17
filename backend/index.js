import express from "express";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/student", userRoute);
app.use(express.urlencoded({ extended: true }));

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
