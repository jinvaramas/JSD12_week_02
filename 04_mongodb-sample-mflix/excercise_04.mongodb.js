// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

//ดึงข้อมูลมจาก collection comments โดยใช้ findOne เพื่อแสดงข้อมูลเพียงหนึ่งเอกสารคือของ
//email = john_bishop@fakegmail.com

db.comments.findOne({ email: "john_bishop@fakegmail.com" })