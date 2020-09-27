const mongoose = require('mongoose');
const Course = require('./models/courses');

mongoose.connect('mongodb://localhost:27017/test-mongoose', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('kết nối thành công'))
    .catch(err => console.log(err))

Course.find({ author: "Mosh"})
    .select("name price")
    .then(courses => console.log(courses))
    .catch(err => console.log(err))