// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

db.movies.find({ released: { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } }).count()

//How many movies were released during 1990 - 2000?
// 3934