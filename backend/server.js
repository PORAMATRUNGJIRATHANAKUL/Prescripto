import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

//app express
const app = express();
const port = process.env.port || 4000;
connectDB();
connectCloudinary();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server Started", port));
