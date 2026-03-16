// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

//ดึงข้อมูลมจาก collection movies โดยใช้ findOne เพื่อแสดงข้อมูลเพียงหนึ่งเอกสารที่มี type = “movie” และ rated = “TV-G”   
db.movies.findOne({ type: "movie", rated: "TV-G" })
