const supertest = require("supertest");
const request = supertest("http://localhost:3000/api/locals");

const localTest = () => {
    describe('API REST LOCAL', () => {
        // GET ALL LOCALS
        describe('GET ALL LOCALS', () => {
            it('Should return json as default data format', (done) => {
                request.get('/')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // GET ONE LOCAL
        describe('GET ONE LOCAL', () => {
            it('Should return json as default data format', (done) => {
                request.get('/:id')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // INSERTAR UN LOCAL
        describe('POST ONE LOCAL', () => {
            it('Should return json as default data format', (done) => {
                const local = {
                    name: 'Juan',
                    surname: 'Medina',
                    dateOfBirth: '03/07/2000',
                    email: 'email@gmail.com',
                    password: 'password'
                };

                request.post('/')
                    .send(local)
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // ELIMINAR UN LOCAL
        describe('DELETE ONE LOCAL', () => {
            it('Should return json as default data format', (done) => {
                request.delete('/:id')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });
    });
}

module.exports = localTest;