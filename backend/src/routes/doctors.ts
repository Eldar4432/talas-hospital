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

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query("SELECT * FROM doctors WHERE id=$1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Doctor not found",
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
// Редактировать врача
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;

    const { name, position, experience, education } = req.body;

    let image;

    if (req.file) {
      image = `/uploads/doctors/${req.file.filename}`;
    }

    let query = `
      UPDATE doctors
      SET
        name = $1,
        position = $2,
        experience = $3,
        education = $4
    `;

    const values = [name, position, experience, education];

    if (image) {
      query += `,
        image = $5
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
        message: "Doctor not found",
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

export default router;
