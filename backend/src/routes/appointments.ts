import { Router } from "express";
import { pool } from "../database/db";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { patient_name, phone, doctor_id, appointment_date, message } =
      req.body;

    const result = await pool.query(
      `
      INSERT INTO appointments
      (
        patient_name,
        phone,
        doctor_id,
        appointment_date,
        message
      )
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *
      `,
      [patient_name, phone, doctor_id, appointment_date, message],
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

export default router;
