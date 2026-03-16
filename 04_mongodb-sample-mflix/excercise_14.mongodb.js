// ดึงข้อมูลจาก sample_mflix

use("sample_mflix");

//ดึงข้อมูลาจาก collection theaters โดยใช้ findOne เพื่อแสดงข้อมูลเพียงหนึ่งเอกสารที่มี location.address.city = “La Quinta”
db.theaters.findOne({ "location.address.city": "La Quinta" })

//What is an example of each documents of above like?

//{
 // _id: ObjectId('59a47286cfa9a3a73e51e73d'),
  //theaterId: NumberInt('1020'),
 // location: {
   // address: {
   //   street1: '79220 Hwy 111',
   //   city: 'La Quinta',
   //   state: 'CA',
   //   zipcode: '92253'
   // },
    //  type: 'Point',
    //  coordinates: [
   //     Double('-116.28111'),
   //     Double('33.709164')
   //   ]
  //  }
  //}
//}