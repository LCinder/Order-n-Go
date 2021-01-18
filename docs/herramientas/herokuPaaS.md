

# :cloud: Despliegue del PaaS :cloud:

***

## Explicación del despliegue en PaaS

De entre los servicios *PaaS* exitentes, como *Azure, AWS Elastic Beanstalk, OpenShift, etc.* me he decantado por utilizar **Heroku,** ya que para empezar es un servicio gratuito, fácil de utilizar, permite **despliegue continuo,** permite simulación local de servicio para ahorrar tiempo y entre los pocos lenguaes que admite está el que uso yo, **Node.js** por lo que es una buena opción y además ya lo había usado anteriormente para un mini-ejemplo pero no terminé de aprenderlo del todo bien y siempre quise hacerlo pero por falta de tiempo no pude, así que creo que es el mejor momento para aprender todo lo que puede ofrecer este servicio que además es de los más usados para este tipo de proyectos.

La creación de la cuenta es muy simple, aunque ya tenía una se accedería de igual forma que en cualquier otro servicio, registrándonos.
Una vez registrados podemos crear un servicio o *dyno* en el caso de Heroku desde el *Dashboard,* y una vez que le hemos puesto un nombre nos vamos a la consola, escribimos `heroku login` y seguimos los pasos para realizar el despliegue fácilmente.
Subimos todo el proyecto y luego hacemos `push` a la rama `heroku` que se nos ha creado, con lo que ya tenemos subido nuestro proyecto de manera manual, aunque luego lo haremos automáticamente.

Por defecto ejecuta el script `npm start` pero podemos cambiarlo desde la configuración de la web, y una vez hecho esto podemos abrir la aplicación donde en principio, como hemos creado la ruta `/status` para que devuelva el *status OK,* nos debería aparecer como se muestra a continuación:


![herokuFunciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuFunciona.PNG)

En este punto el proyecto ya está desplegado, pero habría que hacer `push` manualmente cada vez que queremos que se actualice, para evitar esto configuraremos el despliegue automático.

---


## Configuración despliegue automático


Al igual que hicimos en *serverless,* podemos configurar el despliegue automático de nuestra aplicación cada vez que hacemos `push` al repositorio, olvidándonos de todo el proceso y centrándonos simplemente en hacer los cambios a repositorio. Para esto se realiza de forma muy sencilla conectando nuestra cuenta GitHub a Heroku y permitiéndole acceder al repositorio. Desde la misma ventana de opciones nos permite elegir que sólo se despligue si **pasa todos los sistemas de CI** lo cuál nos viene perfecto ya que en anteriores hitos configuramos que los sistemas de CI realizasen peticiones HTTP a la ruta de todo tipo, así que nos ahorraremos problemas psoteriores. Aceptamos justo como se indica en la imagen y ya tendremos conectado Heroku a GitHub, ahora cada vez que actualicemos el repositorio, si pasan todos los test de los **CI** se desplegará automáicamente la aplicación con los nuevos cambios.

---


## Funcionamiento correcto del PaaS

Recordemos que nustro proyecto era una gestión de mesas y pedidos para un restaurante, por lo que las rutas fueron enfocadas a cambiar el nº de personas de una mesa específica, realizar pedidos nuevos, modificarlos, borrarlos, etc.

Las rutas fueron creadas en el hito anterior, sólo que no disponiamos de una **BBDD** por lo qe al hacer las peticiones PUT y POST no se mantendrían los cambios. Para solucionarlo crearemos una **BBDD NoSQL** donde se almacenarán todos los datos de las mesas y sus pedidos. En principio se crea un **documento** por cada mesa, que simplemente se modificará ya que las mesas no cambian, pero sí los pedidos.

La **BBDD** elegida es **MongoDB Atlas** debido a que escuchaba por todas partes *Mongo, Mongo* y no sabía qué era y como es de las más usadas a nivel global, es gratuita, fácil de utilizar, y en mi caso ya había usado bases de datos *SQL* por lo que quería probar a usar otro tipo de *BBDD* para comprobar diferencias con las tradicionales, además de que por cómo está creado el proyecto me sería más útil una *BBDD* de este tipo.

Creamos una cuenta en *MongoDB Atlas,* y de entre las opciones gratuitas nos ofrecen un **clúster** de datos limitado pero suficiente para nuestro proyecto, el tipo de servicio usado será *AWS* que es el que aparece por defecto y la región elegiré *Frankfurt* ya que el resto de opciones son de EEUU y queremos la mínima latencia posible. Una vez creada y antes de crear colecciones, documentos, etc. vamos a conectarla a nuestro proyecto, seleccionando l opción *connect* del clúster, donde nos dará una cadena con una URL para conectarnos a la *BBDD* que añadiremos en Heroku. Lo haremos en las variables de entorno para que nadie pueda saber la dirección de la misma, y una vez hecho ésto incluimos la ruta por defecto con la máscara `0.0.0.0/0` en opciones de IP para que sea accesible a cualquier peticiónd e cualquier IP. Con esto ya tenemos todo conectado, y podemos empezar a crear datos.


---


## Buenas prácticas en el diseño de la API y correspondencia con HU's

Para ver que todo se realzia de forma adecuada podremos acceder a los *logs* que nos ofrece Heroku mediante `heroku logs` para poder solventar todos los errores que existan. Para la API, basándonos en el hito anterior, realizamos varias rutas con peticiones diferentes en base a las HU's, en principio una por cada HU, aunque en el caso por ejemplo de la [HU4 - Poder cambiar pedidos](https://github.com/LCinder/Order-n-Go/issues/4) realizaremos 2 rutas diferentes, ya que el usuario puede querer cambiar el plato en si o la cantidad del mismo.

Todo esto se encuentra dentro de la clase `modelo.js` ya que según las buenas prácticas todo lo referente a la *BBDD* se crea en la parte *Modelo* siguiendo el sistema *MVC.*

Ahora se mostrarán las diferentes peticiones atendiendo a las HU's y cómo se modifican los datos en función de la petición recibida.



- **Historia de Usuario 1:** Como usuario, quiero seleccionar el nº de personas a ocupar en mesa
		Realizamos la ptición directamente a la URI de Heroku para cambiar el objeto Personas de la *BBDD*:

		`curl --request PUT https://orderngo.herokuapp.com/1/usuarios/8`

		![herokuHU1](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU1.PNG)

		Si ahora realizamos una petición **GET** de la mesa 1 obtenemos que el nº de personas ha sido cambiado.

		![herokuHU1_1](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU1_1.PNG)

		Esto se realiza para todas las peticiones y cambios que se apliquen a la *BBDD* y luego se puede realizar **GET** para comprobar que todo funciona.

- **Historia de Usuario 2:** Como usuario quiero poder realizar cualquier pedido

	`curl --request POST https://orderngo.herokuapp.com/1/nuevopedido/100/8`

	![herokuHU2](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU2.PNG)

	`curl --request GET https://orderngo.herokuapp.com/1`

	![herokuHU2_1](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU2_1.PNG)


- **Historia de Usuario 3:** Como usuario quiero pagar la cuenta

	`curl --request PUT https://orderngo.herokuapp.com/1/pedirCuenta`


	![herokuHU3](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU3.PNG)

	`curl --request GET https://orderngo.herokuapp.com/1`

	![herokuHU3_1](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU3_1.PNG)


- **Historia de Usuario 4:** Como usuario quiero poder cambiar los platos una vez realizado el pedido

	`curl --request PUT https://orderngo.herokuapp.com/1/90/id/10`
	![herokuHU4](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU4.PNG)

	`curl --request GET https://orderngo.herokuapp.com/1/10`

	![herokuHU4_1](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU4_1.PNG)

	Cantidad del mismo: `curl --request PUT https://orderngo.herokuapp.com/1/10/cantidad/8`

	![herokuHU41](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU41.PNG)

	`curl --request GET https://orderngo.herokuapp.com/1/10`

	![herokuHU41_1](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU41_1.PNG)


- **Historia de Usuario 5:** Como usuario quiero cambiar los ingredientes de los platos a elegir

	`curl --request PUT https://orderngo.herokuapp.com/1/10/ingredientes/Curry,Otro`

	![herokuHU5](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU5.PNG)

	`curl --request GET https://orderngo.herokuapp.com/1/10`

	![herokuHU5_1](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU5_1.PNG)


- **Historia de Usuario 7:** Como usuario quiero eliminar pedidos (platos) incluso después de haberlos seleccionado

	`curl --request DELETE https://orderngo.herokuapp.com/1/10/eliminar`

	![herokuHU7](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU7.PNG)

	`curl --request GET https://orderngo.herokuapp.com/1/10`

	![herokuHU7_1](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU7_1.PNG)


- **Historia de Usuario 8:** Como usuario quiero pagar por separado

	`curl --request PUT https://orderngo.herokuapp.com/1/pagarPorSeparado`

	![herokuHU8](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU8.PNG)



- **Historia de Usuario 9:** Como usuario quiero saber qué pedidos he realizado

	`curl --request GET https://orderngo.herokuapp.com/1/35`

	![herokuHU9](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/herokuHU9.PNG)

---



## Uso de BBDD y logs dentro del PaaS junto con pruebas

Para terminar, como hemos dicho antes, tendremos una **BBDD** para poder realizar cambios y poder comprobar que los cambios han sido realizados, además de que avanza la aplicación a una utilidad real ya que sólo faltaría un front-end para poder ser usada.

Para ahorrar tiempo, se recreará localmente el entorno con **heroku local,** ya que es muy fácil de utilizar y ya que vamos a aprender Heroku pues aprendamos todas sus opciones. Simplemente ejecutando `heroku local web` se nos creará el entorno como si hubiéramos desplegado el proyecto pero ubicado en `localhost` con el puerto que hemos establecido. A partir de ahora podremos cambiar todo lo necesario y cuando funcione desplegaremos el proyecto estando seguros de que no habrá errores -o eso esperamos-.

Para la **BBDD,** nos conectaremos a la misma creando un objeto de la clase *mongodb* y mediante la URL que hemos establecido en las variables de entorno de Heroku creamos un nuevo cliente para conectarnos.

La conexión se realiza de manera sencilla, utilizando `client.connect` y a través del mismo acceder a la *BBDD* creada y al documento o colección que queramos. Todo esto se realiza de manera asíncrona para evitar recibir datos tardíos y evitar errores, ya que las peticiones recibirán **Promesas** que deben ser manejadas de este modo. Para ello vamos esperando a las diferentes peticones con `then()` y realizando acciones atentiendo a lo que obtenemos en cada paso anterior. Luego una vez recibidos los datos de la *BBDD* por ejemplo una mesa y sus pedidos, los pasamos a un objeto *mesa* para posteriormente mostrarlo de manera más visual y comprobar que todo funciona.

Los cambios los realizamos con `$set` para el *update*, `$pull` para *delete* y `$push` para *post.*

---
