import { Router } from "express";
import { pool } from "../database/db";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts ORDER BY id");

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

// изменить контакт
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { title, value } = req.body;

    const result = await pool.query(
      `
      UPDATE contacts
      SET
        title=$1,
        value=$2
      WHERE id=$3
      RETURNING *
      `,
      [title, value, id],
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
