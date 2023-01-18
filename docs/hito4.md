Para este hito he tenido que utilizar la integración continua para que los test se ejecuten siempre que se haga un push en la rama.

Para ello, he decidido utilizar la herramienta de integración continua **CircleCI**. Es una plataforma moderna de integración continua y despliegue continuo. La principal ventaja del porqué he usado esta herramienta es por la configuración inicial automática con github ya que me permite que sea una configuración fácil de establecer donde cada vez que actualice el repositorio, se vuelvan a lanzar los tests. Además, se configura con archivos .yaml, con los cuales ya he trabajado, y sobre todo, soporta docker. Por último, permite la paralelización de los tests.

Para poder realizar este hito, he procedido a crearme mi propia imagen y subirla al repositorio de DockerHub. Para ello he seguido una serie de pasos:

1. Partiendo del Dockerfile.test creado en el hito anterior, he creado una imagen propia mediante el comando:

```
docker build . -t lauraroson99/laura_cc_22-23:v1 -f .\Dockerfile.test
```

2. Una vez creada la imagen, debía subirla a DockerHub, para ello he necesitado logearme en docker a través de:

```
docker login
```

Aquí debía introducir mi usuario y contraseña de Docker.

3. Una vez iniciado sesión, debía subir la imagen creada, para ello he introducido:

```
docker push lauraroson99/laura_cc_22-23:v1
```

Una vez tenía la imagen subida, era hora de proceder con la configuración de CircleCI.

El primer paso fue iniciar sesión en circleCI y vincularlo a mi repositorio de GitHub llamado Laura_CC_22-23. Tras esto, la herramienta me ayudaba a generar automáticamente una carpeta dentro del directorio raíz de mi proyecto denominada .circleci que contenía el fichero [config.yml](https://github.com/LauraRoson99/Laura_CC_22-23/.circleci/config.yml). Este fichero se encargará de ejecutar automáticamente el Dockerfile a partir de la imagen que he subido a DockerHub, lo cual permitirá ejecutar los tests cada vez que se haga un push en el repositorio.
