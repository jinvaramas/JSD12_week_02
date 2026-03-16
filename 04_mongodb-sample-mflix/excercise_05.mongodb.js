// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

//ดึงข้อมูลมจาก collection comments โดยใช้ findOne เพื่อแสดงข้อมูลเพียงหนึ่งเอกสารคือของ
//name = John Bishop
db.comments.findOne({ name: "John Bishop" })
