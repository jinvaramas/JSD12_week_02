// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");


// What is the number of movies in the "movies" collection with genres "Drama" and "History" released after the year 1970?
db.movies.find({  //ค้นหาข้อมูลหนังจาก collection movies
  genres: { $all: ["Drama", "History"] }, //หนังที่มีทั้งประเภท Drama และ History
  released: { $gt: ISODate("1970-01-01T00:00:00Z") } //ค้นหาหนังที่ออกหลังวันที่ 1 มกราคม 1970
}).count() //ใช้สำหรับ นับจำนวน document ที่ตรงกับเงื่อนไข

// Count is 546