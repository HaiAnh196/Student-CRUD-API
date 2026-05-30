import { Request, Response } from "express";
import pool from "../db";

export const getStudents = async (req: Request, res: Response) => {
  const [rows] = await pool.query("SELECT * FROM student");

  res.json(rows);
};

export const createStudent = async (req: Request, res: Response) => {
  const { name, email, age } = req.body;

  await pool.query("INSERT INTO student(name,email,age) VALUES (?,?,?)", [
    name,
    email,
    age,
  ]);

  res.json({
    message: "Student added successfully",
  });
};

export const updateStudent = async (req: any, res: any) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    await pool.query(
      "UPDATE student SET name = ?, email = ?, age = ? WHERE id = ?",
      [name, email, age, id],
    );
    res.json({
      success: true,
      message: `Cập nhật sinh viên ID ${id} thành công!`,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteStudent = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM student WHERE id = ?", [id]);
    res.json({ success: true, message: `Xóa sinh viên ID ${id} thành công!` });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
