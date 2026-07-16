import { Router } from "express";
import { pool } from "../database/db";
import { upload } from "../middleware/upload";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM doctors");

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, position, experience, education } = req.body;
    const image = req.file ? `/uploads/doctors/${req.file.filename}` : "";

    const result = await pool.query(
      `
INSERT INTO doctors
(
name,
position,
experience,
education,
image
)
VALUES ($1,$2,$3,$4,$5)
RETURNING *
`,
      [name, position, experience, education, image],
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

    await pool.query("DELETE FROM doctors WHERE id=$1", [id]);

    res.json({
      message: "Doctor deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});
// Редактировать врача
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { name, position, experience, education } = req.body;

    const result = await pool.query(
      `
      UPDATE doctors
      SET
        name = $1,
        position = $2,
        experience = $3,
        education = $4
      WHERE id = $5
      RETURNING *
      `,
      [name, position, experience, education, id],
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
