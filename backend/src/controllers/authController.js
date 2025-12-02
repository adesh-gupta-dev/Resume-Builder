import bcrypt from "bcryptjs";
import pool from "../config/db.js";
import generateToken from "../utils/generateToken.js";

const normalizeEmail = (email) => email.trim().toLowerCase();

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const normalizedEmail = normalizeEmail(email);

    const [existing] = await pool.query("SELECT id FROM users WHERE email = ? LIMIT 1", [
      normalizedEmail,
    ]);

    if (existing.length) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name.trim(), normalizedEmail, hashedPassword]
    );

    const user = {
      id: result.insertId,
      name: name.trim(),
      email: normalizedEmail,
    };

    const token = generateToken({ id: user.id });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Unable to create user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const normalizedEmail = normalizeEmail(email);

    const [rows] = await pool.query(
      "SELECT id, name, email, password FROM users WHERE email = ? LIMIT 1",
      [normalizedEmail]
    );

    if (!rows.length) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userRecord = rows[0];
    const isValid = await bcrypt.compare(password, userRecord.password);

    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const { password: _pw, ...user } = userRecord;
    const token = generateToken({ id: user.id });

    res.json({ user, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Unable to login" });
  }
};

export const getProfile = async (req, res) => {
  res.json({ user: req.user });
};


