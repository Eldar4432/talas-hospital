import { Router } from "express";
import { pool } from "../database/db";
import { authMiddleware } from "../middleware/authMiddleWare";

const router = Router();

// Получить все заявки
router.get("/", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `
SELECT 
  appointments.id,
  appointments.patient_name,
  appointments.phone,
  appointments.appointment_date,
  appointments.message,
  appointments.status,
  doctors.name AS doctor_name
FROM appointments
LEFT JOIN doctors
ON appointments.doctor_id = doctors.id
ORDER BY appointments.created_at DESC
`,
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

// Удалить заявку
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      `
      DELETE FROM appointments
      WHERE id=$1
      `,
      [id],
    );

    res.json({
      message: "Appointment deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      `
      UPDATE appointments
      SET status=$1
      WHERE id=$2
      RETURNING *
      `,
      [status, id],
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
