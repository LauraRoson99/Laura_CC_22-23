const clientTest = require('./routes/client.test.js');
const adminTest = require('./routes/admin.test.js');
const localTest = require('./routes/local.test.js');
const eventTest = require('./routes/event.test.js');
const reviewTest = require('./routes/review.test.js');

describe('EXECUTING ALL TESTS', () => {
    it('CLIENT TESTS', (done) => {
        clientTest();
    });

    // adminTest;
    // localTest;
    // eventTest;
    // reviewTest
})