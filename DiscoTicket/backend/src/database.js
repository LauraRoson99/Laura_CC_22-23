const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost/discoticket", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(res => console.log('DB CONNECTED'))
    .catch(err => console.log(err))