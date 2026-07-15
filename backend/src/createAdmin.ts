import bcrypt from "bcrypt";
import { pool } from "./database/db";

async function createAdmin() {
  const username = "admin";
  const password = "admin123";

  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    `
    INSERT INTO users
    (
      username,
      password
    )
    VALUES
    ($1,$2)
    `,
    [username, hashedPassword],
  );

  console.log("Admin created");

  process.exit();
}

createAdmin();
