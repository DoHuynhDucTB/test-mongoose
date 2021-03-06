const mongoose = require('mongoose');
const Course = require('./models/courses');

mongoose.connect('mongodb://localhost:27017/test-mongoose', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('kết nối thành công'))
    .catch(err => console.log(err))

//in    
// Course.find({ price: {$in: [10, 20]} })
//     .select("name price")
//     .then(courses => console.log(courses))
//     .catch(err => console.log(err))

//and
// Course.find()
//     .and([ {author: "Mosh"}, {isPublished: false} ])
//     .select("name price isPublished")
//     .then(courses => console.log(courses))
//     .catch(err => console.log(err))

//or
// Course.find()
//     .or([ {author: "Mosh"}, {isPublished: true} ])
//     .select("name price isPublished")
//     .then(courses => console.log(courses))
//     .catch(err => console.log(err))

//name bắt đầu bằng Node
// Course.find({name: /^Node/i})
//     .select("name price isPublished")
//     .then(courses => console.log(courses))
//     .catch(err => console.log(err))

//name kết thúc bằng js
// Course.find({name: /JS$/i})
//     .select("name price isPublished")
//     .then(courses => console.log(courses))
//     .catch(err => console.log(err))

//có name chứa chữ js
// Course.find({name: /.*JS.*/i})
//     .select("name price isPublished")
//     .then(courses => console.log(courses))
//     .catch(err => console.log(err))

//count
// Course.find({name: /.*JS.*/i})
//     .select("name price isPublished")
//     .countDocuments()
//     .then(courses => console.log(courses))
//     .catch(err => console.log(err))

//limit
// const pageNumber = 1;
// const pageSize = 3;
// Course.find()
//     .skip((pageNumber-1) * pageSize)
//     .limit(pageSize)
//     .select("name price isPublished")
//     .then(courses => console.log(courses))
//     .catch(err => console.log(err))

//find by id
// Course.findById("5f705ed9c64bdf1d0c02d36a")
// .then(course => console.log(course))
// .catch(err => console.log(err))

//find one  
// Course.findOne({name: "React"})
// .then(course => console.log(course))
// .catch(err => console.log(err))

//update
// Course.findById("5f705ed9c64bdf1d0c02d36a")
//     .then(course => {
//         course.author = "tacgia 11";
//         course.save()
//             .then(course => console.log(course))
//             .catch(err => console.log(err))
//     })

//updateone
// Course.updateOne({ _id: "5f705ed9c64bdf1d0c02d36a"}, {
//         $set: {
//             name: "nodejs"
//         }
//     })
//     .then(console.log)
//     .catch(err => console.log(err))

//update many
// Course.updateMany({
//     $unset: { isPublished: 1 }
// })
// .then(console.log)
// .catch(err => console.log(err))

//delete one
// Course.deleteOne({author:"Mosh"})
// .then(console.log)
// .catch(err => console.log(err))

//delete many
// Course.deleteMany({author:"Mosh"})
// .then(console.log)
// .catch(err => console.log(err))

//find and remove
Course.findOneAndDelete({ author:"Mary"})
.then(console.log)