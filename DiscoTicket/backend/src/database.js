const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.DB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(res => console.log('DB CONNECTED'))
    .catch(err => console.log(err))