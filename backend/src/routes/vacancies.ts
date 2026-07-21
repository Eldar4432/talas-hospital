import { Router } from "express";
import { pool } from "../database/db";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM vacancies
      WHERE is_active = true
      ORDER BY created_at DESC
    `);

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

    const result = await pool.query(
      `
      SELECT *
      FROM vacancies
      WHERE id=$1
      `,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Vacancy not found",
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

router.post("/", async (req, res) => {
  try {
    const {
      title,
      department,
      employment_type,
      experience,
      education,
      salary,
      description,
      requirements,
      conditions,
      apply_url,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO vacancies
      (
        title,
        department,
        employment_type,
        experience,
        education,
        salary,
        description,
        requirements,
        conditions,
        apply_url
      )
      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING *
      `,
      [
        title,
        department,
        employment_type,
        experience,
        education,
        salary,
        description,
        requirements,
        conditions,
        apply_url,
      ],
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

    const {
      title,
      department,
      employment_type,
      experience,
      education,
      salary,
      description,
      requirements,
      conditions,
      apply_url,
      is_active,
    } = req.body;

    const result = await pool.query(
      `
      UPDATE vacancies
      SET
        title=$1,
        department=$2,
        employment_type=$3,
        experience=$4,
        education=$5,
        salary=$6,
        description=$7,
        requirements=$8,
        conditions=$9,
        apply_url=$10,
        is_active=$11
      WHERE id=$12
      RETURNING *
      `,
      [
        title,
        department,
        employment_type,
        experience,
        education,
        salary,
        description,
        requirements,
        conditions,
        apply_url,
        is_active,
        id,
      ],
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

    await pool.query(
      `
      DELETE FROM vacancies
      WHERE id=$1
      `,
      [id],
    );

    res.json({
      message: "Vacancy deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Database error",
    });
  }
});

export default router;
