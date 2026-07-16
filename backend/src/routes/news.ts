import { Router } from "express";
import { pool } from "../database/db";
import uploadNews from "../middleware/uploadNews";
import { authMiddleware } from "../middleware/authMiddleWare";

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
router.post(
  "/",
  authMiddleware,
  uploadNews.single("image"),
  async (req, res) => {
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
  },
);

// Редактировать новость
router.put("/:id", uploadNews.single("image"), async (req, res) => {
  try {
    const { id } = req.params;

    const { title, date, text } = req.body;

    let image;

    if (req.file) {
      image = `/uploads/news/${req.file.filename}`;
    }

    let query = `
      UPDATE news
      SET
        title = $1,
        date = $2,
        text = $3
    `;

    const values = [title, date, text];

    if (image) {
      query += `,
        image = $4
      `;

      values.push(image);
    }

    query += `
      WHERE id = $${values.length + 1}
      RETURNING *
    `;

    values.push(id);

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "News not found",
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

// Удалить новость
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM news WHERE id=$1", [id]);

    res.json({
      message: "News deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

export default router;
