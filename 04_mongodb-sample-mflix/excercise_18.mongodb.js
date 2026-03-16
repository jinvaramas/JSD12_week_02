// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");


db.movies.find({}).sort({ runtime: -1 }).limit(5)

// What are top 5 runtime movies?

// 1.Centennial 2.Baseball 3.Taken 4.Space 5.Reilly: Ace of Spies