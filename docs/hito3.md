Para empezar, la imagen base que he escogido para mi contenedor de pruebas ha sido la oficial de [NODE](https://hub.docker.com/_/node). He escogido esta imagen debido a que estoy trabajando con el stack MEAN (Mongo - Express - Angular - NODE). Por tanto, y como podemos comprobar, Node está y estará muy presente a lo largo de todo mi proyecto y tenía claro que era un concepto base. Es por ello que quería tener una imagen que ya tuviese instalado node y npm y que fuese más fácil a la hora de instalar todos los paquetes necesarios.

Una vez tenía la imagen, sólo tenía que construir el Dockerfile que me permitiría levantar los test con sólo un comando.

~~~
FROM node
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
ENTRYPOINT ["npm","run", "test"]
~~~

Para que los test se conectaran al servidor de la máquina que lanzaba el docker, en vez de conectarse a la URL de mi servidor en local (localhost:3000), he tenido que cambiar la dirección donde apuntaba los test y cambiarlo por **host.docker.internal:3000**

Una vez realizadas estas acciones, tenemos que levantar la imagen docker, para ello, tenemos que ir a la carpeta donde se encuentre el Dockerfile y ejecutar el siguiente comando:
~~~
docker build . -f Dockerfile.test --tag tests
~~~

Una vez compilado, tenemos que lanzar el contenedor, para ello ejecutamos:
~~~
docker run tests
~~~

Finalmente, podremos ver en consola cómo se ejecutan los tests.

***NOTA IMPORTANTE***
A pesar de que la BBDD se encuentre en la nube (MongoDB Atlas), es necesario desplegar antes el servidor en local para que funcionen los tests, para ello, en el mismo directorio donde se encuentra el docker, simplemente hay que escribir **node index.js**
