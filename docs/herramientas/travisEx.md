
# :scroll: Ejecución Travis :scroll:

---

Una vez ya instalado todo lo necesario y preparado el repositorio, podemos ejecutar *Travis,* no sin antes ver qué contiene el archivo [.travis.yml](https://github.com/LCinder/Order-n-Go/blob/master/.travis.yml)

 - En el apartado `language` indicamos el lenguaje de programación que vamos a usar, en este caso *Node.js*

- Como vamos a ejecutar el contenedor desarrollado en el hito anterior, indicamos que suaremos como servicios o `services` *docker*

- Indicamos las versiones de *Node.js* que queremos testear con *Travis* lo cuál nos ahorra mucho tiempo probando una y otra hasta ver cuál es la que funciona, ya que como veremos luego nos realiza una descripción de con cuál versión ha funcionado y con cuál no

- Como *gestor de tareas* ya indicamos en hitos anteriores que usaríamos el mismo *tester* como *gestor de tareas,* en este caso *AVA,* lo cuál se utiliza integrado en CI en el *contenedor Docker* que a su vez usa el archivo [Dockerfile](https://github.com/LCinder/Order-n-Go/blob/master/Dockerfile) y podemos ver en la última línea la ejecución de la forma `CMD ["npm", "test"]` que ejecuta lo indicado en [package.json](https://github.com/LCinder/Order-n-Go/blob/master/package.json) en el apartado `script` que es en este caso la isntrucción `npm test` que corresponde a ejecutar *AVA* en modo *verbose.*

- En el apartado `before_install` indicamos todo lo necesario antes de realizar la ejecución del contenedor y finalmente en `script` establecemos la ejecución del mismo

---

En cuanto realizamos cualquier cambio en el repositorio aparecerá lo siguiente

![Travis Build](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisBuild.PNG)

Que nos indica que se está ejecutando lo establecido en el archivo anterior, y una vez realizada la *build* nos reporta un *log* con la información de los trabajos realizados como se ve a continuación:

![Travis Log](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisLog.PNG)

En este caso todos funcionan con las distintas versiones de *Node.js* pero en el caso de que no funcionase se indica explícitamente lo que falla en el *log* creado.

![Travis Funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisBuildFunciona.PNG)






