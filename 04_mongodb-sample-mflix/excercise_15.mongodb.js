// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");


db.movies.find({ plot: { $regex: "American", $options: "i" } }).count()

// How many movies does mentioned American in its plot?
// 557