import express from "express";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);


app.get("/", (req, res) => {
  res.send("API is running...");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
