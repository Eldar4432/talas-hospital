import { Router } from "express";
import { pool } from "../database/db";
import jwt from "jsonwebtoken";

const router = Router();

const JWT_SECRET = "talas_hospital_secret";

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password],
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Неверный логин или пароль",
      });
    }

    const user = result.rows[0];

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.json({
      token,
      user: {
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

export default router;
