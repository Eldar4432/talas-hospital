import { Router } from "express";
import { pool } from "../database/db";

const router = Router();

// Получить все отделения
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM departments ORDER BY id");

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

// Добавить отделение
router.post("/", async (req, res) => {
  try {
    const { name, description, services, schedule } = req.body;

    const result = await pool.query(
      `
      INSERT INTO departments
      (
        name,
        description,
        services,
        schedule
      )
      VALUES
      ($1,$2,$3,$4)
      RETURNING *
      `,
      [name, description, services, schedule],
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

// Редактировать отделение
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { name, description, services, schedule } = req.body;

    const result = await pool.query(
      `
      UPDATE departments
      SET
        name=$1,
        description=$2,
        services=$3,
        schedule=$4
      WHERE id=$5
      RETURNING *
      `,
      [name, description, services, schedule, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Department not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

// Удалить отделение
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM departments WHERE id=$1", [id]);

    res.json({
      message: "Department deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

export default router;
