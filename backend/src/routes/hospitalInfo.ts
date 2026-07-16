import { Router } from "express";
import { pool } from "../database/db";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM hospital_info LIMIT 1");

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

router.put("/", async (req, res) => {
  try {
    const { name, description, history, mission, values, development } =
      req.body;

    const result = await pool.query(
      `
      UPDATE hospital_info
      SET
        name = $1,
        description = $2,
        history = $3,
        mission = $4,
        values = $5,
        development = $6
      WHERE id = 1
      RETURNING *
      `,
      [name, description, history, mission, values, development],
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
