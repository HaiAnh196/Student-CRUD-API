# 📝 Dự Án Quản Lý Sinh Viên Đăng Ký Môn Học (CRUD API)

Dự án xây dựng ứng dụng quản lý Sinh viên, kết nối Cơ sở dữ liệu MySQL cục bộ và thực hiện đầy đủ các chức năng CRUD cơ bản.

---

## 👤 Thông tin sinh viên

- **Họ và tên:** Lê Hải Anh
- **Mã số sinh viên:** 24100110
- **Lớp:** Thiết kế Web nâng cao(N01.LT2)

---

## 🛠 Công nghệ sử dụng

- **Backend Framework:** Node.js, Express, TypeScript, ts-node
- **Database:** MySQL (thư viện mysql2)
- **API Testing Tool:** Postman

---

## 🚀 Hướng dẫn cài đặt và khởi chạy ứng dụng

### 1. Cài đặt các thư viện phụ thuộc

Mở terminal tại thư mục gốc dự án và chạy lệnh: `npm install`

### 2. Cấu hình Cơ sở dữ liệu

- Tạo cơ sở dữ liệu MySQL Local với tên: `studentreg`
- Chạy script tạo bảng `student` bao gồm các trường: id, name, email, age.

### 3. Khởi động Server

Chạy lệnh sau để bật server: npx ts-node src/app.ts
Server sẽ chạy thành công tại địa chỉ: `http://localhost:3000`

---

## 📋 Danh sách các API chức năng (Endpoints)

| Chức năng          | Phương thức | Đường dẫn (URL)                    | Định dạng Body gửi đi (JSON)               |
| :----------------- | :---------: | :--------------------------------- | :----------------------------------------- |
| Xem danh sách SV   |     GET     | http://localhost:3000/students     | Không có                                   |
| Thêm sinh viên mới |    POST     | http://localhost:3000/students     | {"name": "...", "email": "...", "age": 20} |
| Sửa thông tin SV   |     PUT     | http://localhost:3000/students/:id | {"name": "...", "email": "...", "age": 22} |
| Xóa sinh viên      |   DELETE    | http://localhost:3000/students/:id | Không có                                   |
