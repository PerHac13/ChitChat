import express from "express";
import dotenv from "dotenv";

// Files import
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// variable
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// Middleware
app.use(express.json()); // to parse the incoming request with JSON payload (from req.body)
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hi from Backend!!");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
