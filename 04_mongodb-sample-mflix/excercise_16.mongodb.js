// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count()

//How many movies does end plot (sentence) with the street.
    // 8