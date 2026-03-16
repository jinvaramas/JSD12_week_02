// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

//ดึงข้อมูลมจาก collection comments โดยใช้ findOne เพื่อแสดงข้อมูลเพียงหนึ่งเอกสารคือของ
//id = “5a9427648b0beebeb69579f5 
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") })
