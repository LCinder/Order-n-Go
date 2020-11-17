
# :scroll: Ejecución Travis :scroll:

---

Una vez ya instalado todo lo necesario y preparado el repositorio, podemos ejecutar *Travis,* no sin antes ver qué contiene el archivo [.travis.yml](https://github.com/LCinder/Order-n-Go/blob/master/.travis.yml)

 - En el apartado `language` indicamos el lenguaje de programación que vamos a usar, en este caso *Node.js.*

Podemos probar diferentes versiones *generales* de lenguaje como por ejemplo `language:minimal` que incluye lo mínimo indispensable, como las herramientas de red esenciales y Docker entre otros. Como el contenedor que creamos en el hito anterior usaba la imagen *alpine* y luego instalábamos el gestor de paquetes *npm* entre otros para que la imagen con *Node.js* funcionase, realmente ¿es necesario instalar más cosas de las necesarias e incluso que se repitan? La respuesta es que no, no tiene absolutamente ningún tipo de sentido, simplemente indicando el lenguaje `minimal` sólo ejecutamos 1 versión del lenguaje. 
Existen otros lenguajes como *generic* que contiene todo lo necesario y genérico para diferentes lenguajes, lo que lo hace más lento al incluir mayor variedad, por lo que no se ha incluído.
En nuestro caso usaremos `language: node_js` para que existan las mismas *reglas* junto a la otra plataforma de integración continua a elegir y poder comprobar la diferencia de timepo entre las dos.

- Indicamos las versiones de *Node.js* que queremos testear con *Travis* lo cuál nos ahorra mucho tiempo probando una y otra hasta ver cuál es la que funciona, ya que como veremos luego nos realiza una descripción de con cuál versión ha funcionado y con cuál no. 

- Como *gestor de tareas* ya indicamos en hitos anteriores que usaríamos el mismo *tester* como *gestor de tareas,* en este caso *AVA,* lo cuál se utiliza integrado en CI en el *contenedor Docker* que a su vez usa el archivo [Dockerfile](https://github.com/LCinder/Order-n-Go/blob/master/Dockerfile) y podemos ver en la última línea la ejecución de la forma `CMD ["npm", "test"]` que ejecuta lo indicado en [package.json](https://github.com/LCinder/Order-n-Go/blob/master/package.json) en el apartado `script` que es en este caso la isntrucción `npm test` que corresponde a ejecutar *AVA* en modo *verbose.*

- En el apartado `before_install` indicamos todo lo necesario antes de realizar la ejecución del contenedor y finalmente en `script` establecemos la ejecución del mismo

---

En cuanto realizamos cualquier cambio en el repositorio aparecerá lo siguiente

![Travis Build](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisBuild.PNG)

Que nos indica que se está ejecutando lo establecido en el archivo anterior, y una vez realizada la *build* nos reporta un *log* con la información de los trabajos realizados, en este caso todos funcionan con las distintas versiones de *Node.js* pero en el caso de que no funcionase se indica explícitamente lo que falla en el *log* creado.

![Travis Funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisBuildFunciona.PNG)






