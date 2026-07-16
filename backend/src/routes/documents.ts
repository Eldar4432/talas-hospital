import { Router } from "express";
import { pool } from "../database/db";
import uploadDocument from "../middleware/uploadDocuments";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM documents ORDER BY created_at DESC",
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

router.post("/", uploadDocument.single("file"), async (req, res) => {
  try {
    const { title, description } = req.body;

    const file = req.file ? `/uploads/documents/${req.file.filename}` : "";

    const result = await pool.query(
      `
INSERT INTO documents
(title,description,file)
VALUES($1,$2,$3)
RETURNING *
`,

      [title, description, file],
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
