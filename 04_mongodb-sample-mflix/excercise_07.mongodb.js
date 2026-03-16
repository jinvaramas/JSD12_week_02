// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

//ดึงข้อมูลาจาก collection movies โดยใช้ find เพื่อแสดงข้อมูลทั้งหมดที่มี type = “movie” และ rated = “TV-G”
db.movies.find({ type: "movie", rated: "TV-G" }).count()

// Count is 58