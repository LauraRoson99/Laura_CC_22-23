const mongoose = require('mongoose');

// mongodb+srv://lauraroson:1234@clusterlaura.hzxbl.mongodb.net/?retryWrites=true&w=majority
const url = 'mongodb://localhost/discoticket';

mongoose
    .connect("mongodb+srv://lauraroson:1234@clusterlaura.hzxbl.mongodb.net/?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(res => console.log('DB CONNECTED'))
    .catch(err => console.log(err))