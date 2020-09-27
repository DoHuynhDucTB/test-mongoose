const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name : { type: String },
    author: { type: String },
    tags: { type: [String] },
    date: { type: Date, default: Date.now },
    isPusblished: { type:Boolean },
    price: { type: Number }
})

const Course = mongoose.model('Course', CourseSchema, 'Course');
module.exports = Course;