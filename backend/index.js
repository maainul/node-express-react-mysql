import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();
// database call
try {
  await db.authenticate();
  console.log("Database Connected successfully");
} catch (error) {
  console.log("Connection error :", error);
}
// server call
app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);
app.listen(5000, () => console.log("Server is running at port 5000"));
