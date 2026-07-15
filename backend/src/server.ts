import express from "express";
import cors from "cors";
import "./database/db";
import doctorsRouter from "./routes/doctors";
import departmentsRouter from "./routes/departments";
import newsRouter from "./routes/news";
import appoinmentsRouter from "./routes/appointments";
import authRouter from "./routes/auth";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/doctors", doctorsRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/news", newsRouter);
app.use("/api/appointments", appoinmentsRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Talas Hospital API работает",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
