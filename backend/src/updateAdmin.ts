import bcrypt from "bcrypt";
import { pool } from "./database/db";

async function updateAdmin() {
  const password = "admin123";

  const hash = await bcrypt.hash(password, 10);

  await pool.query(
    `
    UPDATE users
    SET password=$1
    WHERE username='admin'
    `,
    [hash],
  );

  console.log("Password updated");

  process.exit();
}

updateAdmin();
