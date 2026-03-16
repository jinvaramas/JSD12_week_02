// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

//ดึงข้อมูลมจาก collection movies โดยใช้ find เพื่อแสดงข้อมูลทั้งหมดที่มี type = “movie” และ rated = “TV-G”
db.movies.find({ type: "movie", rated: "TV-G" }).count()

//How many movies are there in “movie” type and “TV-G” rated?
// Count is 58
