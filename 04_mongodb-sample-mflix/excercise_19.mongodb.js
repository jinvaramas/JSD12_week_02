// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");


db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5)
// What are top 5 runtime movies that less than 60 minutes?

//1.Ghosts of the Abyss 2.George Carlin: Jammin' in New York 3.Mods 4.Screwed in Tallinn 5.Chile, the Obstinate Memory