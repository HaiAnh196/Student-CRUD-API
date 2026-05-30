import express from "express";
import "./db";

import studentRoute from "./routes/student.route";

const app = express();

app.use(express.json());

app.use("/students", studentRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
