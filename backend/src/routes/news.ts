import { Router } from "express";
import { pool } from "../database/db";
import uploadNews from "../middleware/uploadNews";

const router = Router();

// Получить все новости
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT *
      FROM news
      ORDER BY date DESC
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

// Добавить новость
router.post("/", uploadNews.single("image"), async (req, res) => {
  try {
    const { title, date, text } = req.body;
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const image = req.file ? `/uploads/news/${req.file.filename}` : null;
    const result = await pool.query(
      `
      INSERT INTO news
      (
        title,
        date,
        text,
        image
      )
      VALUES
      ($1,$2,$3,$4)
      RETURNING *
      `,
      [title, date, text, image],
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      DELETE FROM news
      WHERE id=$1
      RETURNING *
      `,
      [id],
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { title, date, text, image } = req.body;

    const result = await pool.query(
      `
      UPDATE news
      SET
        title=$1,
        date=$2,
        text=$3,
        image=$4
      WHERE id=$5
      RETURNING *
      `,
      [title, date, text, image, id],
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
