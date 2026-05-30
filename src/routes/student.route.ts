import express from "express";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller";

const router = express.Router();

// Lấy danh sách sinh viên
router.get("/", getStudents);

// Thêm sinh viên mới
router.post("/", createStudent);

// Sửa thông tin sinh viên theo ID
router.put("/:id", updateStudent);

// Xóa sinh viên theo ID
router.delete("/:id", deleteStudent);

export default router;
