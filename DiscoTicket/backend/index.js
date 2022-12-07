const app = require('./src/app');
require('./src/database');

app.listen(app.get('port'));

console.log('Server on port', app.get('port'));