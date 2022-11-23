const supertest = require("supertest");
const request = supertest("http://localhost:3000/api/reviews");

const reviewTest = () => {
    describe('API REST REVIEW', () => {
        // GET ALL REVIEWS
        describe('GET ALL REVIEWS', () => {
            it('Should return json as default data format', (done) => {
                request.get('/')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // GET ONE REVIEW
        describe('GET ONE REVIEW', () => {
            it('Should return json as default data format', (done) => {
                request.get('/:id')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // INSERTAR UN REVIEW
        describe('POST ONE REVIEW', () => {
            it('Should return json as default data format', (done) => {
                const review = {
                    name: 'Juan',
                    surname: 'Medina',
                    dateOfBirth: '03/07/2000',
                    email: 'email@gmail.com',
                    password: 'password'
                };

                request.post('/')
                    .send(review)
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });

        // ELIMINAR UN REVIEW
        describe('DELETE ONE REVIEW', () => {
            it('Should return json as default data format', (done) => {
                request.delete('/:id')
                    .expect('Content-Type', /json/)
                    .expect(200, done);
            });
        });
    });
}

module.exports = reviewTest;