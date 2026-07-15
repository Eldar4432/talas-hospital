import express from "express";
import cors from "cors";
import "./database/db";
import doctorsRouter from "./routes/doctors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/doctors", doctorsRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Talas Hospital API работает",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
