// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

db.movies.find({ directors: "Hal Roach" }).count()


//How many movies did Hal Roach directed?
//3