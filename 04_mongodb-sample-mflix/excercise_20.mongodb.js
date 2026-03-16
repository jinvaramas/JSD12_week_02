// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");


db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3)

// I was born in 1955, which 3 movies should I watch in next 10 years?

//1.Il segno di Venere 2.The Dam Busters 3.The Miracle of Marcelino 