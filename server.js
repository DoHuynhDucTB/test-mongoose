const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test-mongoose', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('kết nối thành công'))
    .catch(err => console.log(err))