**_DISEÑO API REST_**
Las rutas diseñadas para montar esta API se han basado en los distintos modelos que encontramos en la BBDD. En este caso serían:

- Administrador: Encargado de aceptar y dar de alta a las discotecas/locales.
- Cliente: Usuario que puede comprar entradas y subir reviews de los locales.
- Local: Usuario que puede vender entradas y subir eventos.
- Evento: Próximos eventos que puede subir un local.
- Review: Valoración de los clientes hacia los locales, con una nota (del 1 al 5) y un comentario.

Básicamente, la API contempla todas operaciones CRUD de cada uno de los modelos.

**FRAMEWORK**
Para empezar,y como ya mencionamos en hitos anteriores, he utilizado stack MEAN. El stack MEAN (MongoDB, ExpressJS, AngularJS, Node.js) es un conjunto de tecnologías de software que se utiliza para desarrollar aplicaciones web y móviles.

- MongoDB: BBDD NoSQL.
- ExpressJS: Framework de Node.js.
- AngularJS: Framework de JavaScript.
- Node.js: Entorno de ejecución de JavaScript.

Como podemos ver, he usado Express como framework para la API REST creada debido a varias razones:

- Es fácil de usar: Express es un framework minimalista que no requiere una gran cantidad de configuración o código para comenzar a desarrollar una API REST. Es fácil de entender y utilizar, lo que permite a los desarrolladores comenzar a desarrollar rápidamente.
- Es escalable: Express es un framework escalable que se puede utilizar para desarrollar aplicaciones web y móviles de cualquier tamaño. Es fácil de ampliar y adaptar para manejar un gran volumen de tráfico y datos.
- Tiene una gran comunidad: Express es uno de los frameworks de Node.js más populares y ampliamente utilizados. Tiene una gran comunidad de desarrolladores detrás de él, lo que significa que hay una gran cantidad de recursos y soluciones disponibles para cualquier problema que pueda surgir.
- Tiene una gran cantidad de middleware: Hay una gran cantidad de herramientas y módulos disponibles para extender las funcionalidades de la aplicación. Esto permite a los desarrolladores ahorrar tiempo y esfuerzo al no tener que escribir código desde cero para funciones comunes.

A continuación vemos un ejemplo del cógido desarrollado:
`clientCtrl.getClient = async (req, res) => {
    const _id = req.params.id;
    await Client.findById({ _id }, (err, client) => {
        if (err) {
            res.status(500).send({ message: 'ERROR at get Client' });
        } else {
            if (!client) {
                res.status(404).send({ message: 'Client not found' });
            } else {
                res.status(200).send({ data: client });
            }
        }
    });
};`
Esta función permite obtener un cliente buscando por el id que se pasa por la ruta.

**BUENAS PRÁCTICAS**
Para este apartado mostraré cómo he dividido los códigos en distintos archivos y así no tener toda la información en uno solo. Estas buenas prácticas se contemplan sobre todo a la hora de inicializar el servidor y conectarlo con la BBDD.

En mi caso, en el código principal (index.js) sólo se muestra la siguiente información:
`
const app = require('./src/app');
require('./src/database');

app.listen(app.get('port'));

console.log('Server on port', app.get('port'));
`

Podemos observar como este archivo nombra la constante app a partir de otro archivo. Si nos vamos dentro de este archivo, vemos lo siguiente:

`
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
`

Vemos cómo el puerto está guardado en el archivo .env para no tener el número escrito en bruto. Igual pasa con el cógido dedicado a conectarnos a la BBDD.

`
const mongoose = require('mongoose');

mongoose
.connect(process.env.DB_URI, {
useUnifiedTopology: true,
useNewUrlParser: true
})
.then(res => console.log('DB CONNECTED'))
.catch(err => console.log(err))
`

Si nos fijamos, la variable process.env.DB_URI guarda la URL de acceso a la BBDD en mongo.
Finalmente, y siendo MUY IMPORTANTE, las funciones se guardan en un objeto controller a través del cual se accede a la BBDD.

**LOGS**
A lo largo del código encontramos logs que nos dan información sobre lo que está pasando. Como hemos visto anteriormente, aparecen logs para indicar que la BBDD se ha conectado, en qué puerto está escuchando y también si hay algún error.
En el caso de las llamadas a los endpoints también encontramos logs como el siguiente:

`clientCtrl.createClient = async (req, res) => {
    const newClient = new Client(req.body);
    Client.findOne({ email: newClient.email }, (err, user) => {
        if (user) {
            res.status(404).json({ message: "User already registered" });
        } else {
            newClient.save((err, data) => {
                if (err) {
                    res.status(500).json({ message: "ERROR at create new client" });
                } else {
                    res.status(200).json({ message: 'Client created', data });
                }
            });
        }
    });
};`

Donde se nos muestra un mensaje de error en el caso de que haya habido un error a la hora de crear un cliente nuevo.

**API TEST**
Los test creados en esta asignatura se han diseñado para probar la API y, sobre todo, para cumplir y cubrir las distintas historias de usuario. Las tres historias de usuario principales eran las siguientes:

- HU0: Como administrador, dado que debo mantener el orden de la aplicación, necesito poder controlar a los usuarios registrados.
- HU1: Como dueño de una discoteca, dado que quiero aumentar la clientela de mi local, necesito saber qué opinión tienen los clientes sobre mi local
- HU2: Como cliente, dado que salgo mucho de fiesta, quiero poder gestionar los locales registrados en la aplicación.

Por tanto, es necesario poder registrar, eliminar y obtener los datos tanto a clientes como a locales en el caso de los administradores, insertar y eliminar comentarios en el caso de los clientes e insertar y eliminar eventos por parte de las discotecas.
