// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");


db.movies.find({ cast: "Roy L. McCardell" }).count()


//In how many films is Roy L. McCardell credited as an actor?
// 1