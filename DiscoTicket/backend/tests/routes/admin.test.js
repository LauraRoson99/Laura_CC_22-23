const supertest = require("supertest");
const request = supertest("http://localhost:3000/api/admins");

const adminTest = () => {
    describe('API REST ADMIN', () => {
        // GET ALL ADMINS
        describe('GET ALL ADMINS', () => {
            it('Should return json as default data format', (done) => {
                request.get('/')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // GET ONE ADMIN
        describe('GET ONE ADMIN', () => {
            it('Should return json as default data format', (done) => {
                request.get('/:id')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // INSERTAR UN ADMIN
        describe('POST ONE ADMIN', () => {
            it('Should return json as default data format', (done) => {
                const admin = {
                    name: 'Juan',
                    surname: 'Medina',
                    dateOfBirth: '03/07/2000',
                    email: 'email@gmail.com',
                    password: 'password'
                };

                request.post('/')
                    .send(admin)
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // ELIMINAR UN ADMIN
        describe('DELETE ONE ADMIN', () => {
            it('Should return json as default data format', (done) => {
                request.delete('/:id')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });
    });
}

module.exports = adminTest;