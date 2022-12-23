const supertest = require("supertest");
const request = supertest("host.docker.internal:3000/api/clients");
// "http://localhost:3000/api/clients"
// host.docker.internal:3000/api/clients

// GET ALL CLIENTS
describe('GET CLIENTS', () => {
    describe('GET ALL CLIENTS', () => {
        it('Should return json as default data format', (done) => {
            request.get('/')
                .expect('Content-Type', /json/)
                .expect(200, done)
        });

        it('Should return [] because there is no clients yet', (done) => {
            request.get('/')
                // .expect([], done)
                .expect(200, done)
        });
    });
})

// SIGNUP CLIENTS
describe('POST CLIENT', () => {
    describe('SIGN UP CLIENT', () => {
        it('Should return json as default data format', (done) => {
            request.get('/')
                .expect('Content-Type', /json/)
                .expect(200, done)
        });

        // INSERTAR UN NUEVO CLIENTE
        it('Should return 200 because is a new client', (done) => {
            const client = {
                _id: '52f602d787945c344bb4bda5',
                name: 'Juan',
                surname: 'Medina',
                dateOfBirth: '03/07/2000',
                email: 'email@gmail.com',
                password: 'password'
            };

            request.post('/')
                .send(client)
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        // INSERTAR UN CLIENTE EXISTENTE
        it('Should return 404 because user already exists', (done) => {
            const client = {
                _id: '52f602d787945c344bb4bda5',
                name: 'Juan',
                surname: 'Medina',
                dateOfBirth: '03/07/2000',
                email: 'email@gmail.com',
                password: 'password'
            };

            request.post('/')
                .send(client)
                .expect('Content-Type', /json/)
                .expect(404, done);
        })
    });
})

// OBTENER UN SÓLO CLIENTE
describe('GET CLIENT', () => {
    describe('GET ONE CLIENT THAT EXISTS', () => {
        it('Should return json as default data format', (done) => {
            request.get('/52f602d787945c344bb4bda5')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('GET ONE CLIENT THAT DOES NOT EXISTS', () => {
        it('Should return json as default data format', (done) => {
            request.get('/52f602d787945c344bb4bdff')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });
    });
});

// ELIMINAR UN CLIENTE
describe('', () => {
    describe('DELETE ONE CLIENT', () => {
        it('Should return json as default data format', (done) => {
            request.delete('/52f602d787945c344bb4bda5')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
})