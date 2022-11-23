const supertest = require("supertest");
const request = supertest("http://localhost:3000/api/events");

const eventTest = () => {
    describe('API REST EVENT', () => {
        // GET ALL EVENTS
        describe('GET ALL EVENTS', () => {
            it('Should return json as default data format', (done) => {
                request.get('/')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // GET ONE EVENT
        describe('GET ONE EVENT', () => {
            it('Should return json as default data format', (done) => {
                request.get('/:id')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // INSERTAR UN EVENT
        describe('POST ONE EVENT', () => {
            it('Should return json as default data format', (done) => {
                const event = {
                    name: 'Juan',
                    surname: 'Medina',
                    dateOfBirth: '03/07/2000',
                    email: 'email@gmail.com',
                    password: 'password'
                };

                request.post('/')
                    .send(event)
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // ELIMINAR UN EVENT
        describe('DELETE ONE EVENT', () => {
            it('Should return json as default data format', (done) => {
                request.delete('/:id')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });
    });
}

module.exports = eventTest;