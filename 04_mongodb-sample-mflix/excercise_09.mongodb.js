// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");


//ดึงข้อมูลาจาก collection theaters โดยใช้ find เพื่อแสดงข้อมูลทั้งหมดที่มี location.address.city = “La Quinta”
db.theaters.find({ "location.address.city": "La Quinta" }).count()

// Question is How many theaters does La Quinta city has?

// Answer is 1