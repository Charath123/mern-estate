import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on 3000");
});

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/test", (req, res) => {
//   res.send("Hello Test");
// });
app.use("/api/user", userRouter);
