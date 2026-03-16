// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

db.theaters.find({ "location.address.city": "La Quinta" }).count()
// Question is How many theaters does La Quinta city has?

// Answer is 1