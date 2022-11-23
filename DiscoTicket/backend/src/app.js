const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/clients', require('./routes/clients.routes'));
app.use('/api/admins', require('./routes/admins.routes'));
app.use('/api/events', require('./routes/events.routes'));
app.use('/api/locals', require('./routes/locals.routes'));
app.use('/api/reviews', require('./routes/reviews.routes'));

module.exports = app;