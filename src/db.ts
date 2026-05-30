import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "LeHaiAnh196@",
  database: "studentreg",
});

pool
  .getConnection()
  .then(() => {
    console.log("MySQL Connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default pool;
