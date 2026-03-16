// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

//ดึงข้อมูลาจาก collection theaters โดยใช้ find เพื่อแสดงข้อมูลทั้งหมดที่มี location.address.state = “AL”
db.theaters.find({ "location.address.state": "AL" }).count()

// Question is How many theaters does AL state has?
// Answer is 19