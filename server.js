const mongoose = require('mongoose');
const Course = require('./models/courses');

mongoose.connect('mongodb://localhost:27017/test-mongoose', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('kết nối thành công'))
    .catch(err => console.log(err))

const newCourse = new Course({
    _id: "abc123",
    name: "nodejs",
    author: "tg1",
    tags: ["tag1", "tag2"],
    isPusblished: true,
    price: 10
});

newCourse.save()
    .then(course => console.log(course))
    .catch(err => console.log(err))