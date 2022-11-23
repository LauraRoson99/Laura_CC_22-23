Para este hito, he decidido testear la API REST que he construido para mi aplicación. Antes de nada, debemos tener en cuenta que he usado el stack MEAN para la elaboración tanto del back y front, es decir, se trata de un desarrollo full stack. Stack MEAN procede de las herramientas que usa (M - MongoDB, E - ExpressJS, A - Angular, N - NodeJS).

Para realizar los test he tenido que tomar una serie de decisiones:

- GESTOR DE TAREAS: He elegido el propio npm. Es cierto que npm es el gestor de paquetes de node, pero tiene "funcionalidades básicas" que le permite ser un gestor de tareas, sobre todo para proyectos pequeños. Para ello, he creado un script en package.json que se ejecuta a través del comando "npm run test". He decidido elegir npm debido a que es un gestor de tareas muy sencillo, al cual ya estoy muy familiarizada y además, el tamaño de mi proyecto me permite poder elegirlo.

- BIBLIOTECA DE ASERCIONES: En un principio y, por ahora, he decidido usar supertest. El porqué de esta elección se basa en que es una librería que ayuda a los desarrolladores a testear API's. Es por eso que, nada más conocí supertest, decidí usarlo, ya que por ahora he decidido testear la API REST que he desarrollado.

- MARCO DE PRUEBAS: He usado mocha. Como ya sabemos, es un framework de pruebas propio de javascript, lenguaje en el que se basa todo mi proyecto y que se ejecuta con NodeJS. Lo he elegido porque me permite crear test síncronos o asíncronos, lo que me venía muy bien a la hora de probar funciones de la API, ya que llaman a la BBDD y hay veces que estas llamadas pueden tardar demasiado. Además, permite escribir informes sobre los test.
