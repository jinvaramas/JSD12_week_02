// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");


//Find all movies in the "movies" collection
//released between 1950 and 1970 (inclusive) 
// that are documented as being shown in countries located in the USA.

db.movies.find({ //ค้นหาข้อมูลหนังจาก collection movies
  countries: {$in: ["USA"]}, //หนังที่สร้างในประเทศ USA
  year: {$gte: 1950, $lte: 1970} //หนังที่ออกระหว่างปี 1950 ถึง 1970
})
