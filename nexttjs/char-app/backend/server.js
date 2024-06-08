import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json()); // 受診したリクエストをJSON payloadで解析する

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello world!!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT} `);
});
