

# :book: Elección Frameworks para Node.js :book:

---


Dentro de los numerosos *frameworks* que existen para *Node.js* para *API's* y *routing* destaca uno por encima de cualquier otro: **Express.js.** Es el más usado a nivel mundial, y con razón porque es sencillo de entender a diferencia de otros que son una locura, pero por esa misma razón voy a probar otros menos conocidos y vamos a buscar cuál es el mejor y por qué.

He probado muchísimos, no voy a nombrarlos todos pero entre ellos estaban *sails.js*, *nest.js*,  *ringo.js*,  *moleculer.js*, *meteor.js*,  *vulcan.js*,  *adonis.js*, etc. Todos los he descartado ya que o la documentación era muy mala o escasa, o sobretodo era difícil de crear un sencillo ejemplo, por lo que ya usarlo para un proyecto me parecía que me darían bastantes problemas y no queremos eso. Es una pena porque por ejemplo *sails.js* me sonaba desde hace mucho y quería probarlo pero no conseguí entender del todo cómo funcionaba y a la mínima que se iniciaba un proyecto te creaba 1200 carpetas y archivos que no necesitaba, aunque buscando después me di cuenta que era porque sirve para crear proyectos muy rápidamente con patrones ya definidos, cosa que no necesitaba, por lo que pasé a buscar otros *frameworks* y básicamente encontré  3 uqe me parecieron muy sencillos de usar:
- Koa.js
- Restify.js
- Fastify.js

Son *frameworks* muy usados pero tiene su explicación ya que su sencillez de uso sobrepasa a todos los anteriores, además de que la documentación sobre cómo usarlo destaca por su buena explicación, sobretodo en *Fastify.js,* pero dejándonos de epxlicaciones vamos a pasar a ver qué nos ofrece cada uno.

- **Koa.js:** Creado por el equipo desarrollador de *Express.js* lo cuál hizo que quisiera probar si realmente se parece al mismo y por la sencillez de uso según su documentación. Además es muy ligero y soporta peticiones asíncronas.

Es muy sencillo de utilizar, y para este y el resto de ejemplos crearemos un ruta que simplemente mostrará un mensaje de que está funcionando al ejecutarlo ocn el *framework* específico.

El código queda de la forma:

~~~

const Koa = require("Koa");
const app = new Koa();

app.use(async ctx => {
	ctx.body = "Funciona Koa.js!";
});

app.listen(5000);

~~~

Y vemos cómo se ejecuta y funciona:

![Koa](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/koaFunciona.PNG)


- **Restify.js:** Usado por *npm* y *Netflix,* me pareció que si una empresa tan grande lo usaba debía ser por algo. Está destinado a *RESTFul API's*


El código queda de la forma:

~~~

const restify = require("restify");

function respond(req, res, next) {
	res.send("Funciona Restify!");
	next();
}

let server = restify.createServer();
server.get("/", respond);
server.listen(5000);

~~~

Y vemos cómo se ejecuta y funciona:

![Restify](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/restifyFunciona.PNG)



- **Fastify.js:** Dice ser el *framework más rápido actualmente* superando en casi el doble de rapidez a *Express.js,* proporcionando u enrutamiento más rápido, además de tener una sintaxis más limpia para escribir código asíncrono.


El código del ejemplo queda de la forma:

~~~

const fastify = require("fastify")();

fastify.get("/", async (req, res) => {
	return "Funciona Fastify!";
});

const start = async () => {
	try {
		await fastify.listen(5000)
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}

start();

~~~

Y obtenemos como resultado:

![Fastify](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/fastifyFunciona.PNG)





Ahora vamos a realizar *minibenchmarks* para comprobar cuál objetivamente es mejor, atendiendo al nº de peticiones que pueden recibir por segundo, latencia, etc.
Para ello usaremos **autocannon** que es una biblioteca de *Node.js* para realizar este tipo de acciones, concretamente vamos a establecer que realice:
- En un máximo de *50 s* el mayor nº de peticiones que pueda
- Con *50 conexiones concurrentes*
- Y con *500 peticiones lanzadas sin esperar confirmación,* ésto para *testear* la latencia.  

Ejecutando para *Koa.js:*

![Koa Benchmark](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/koaBenchmark.PNG)

Ejecutando para *Restify.js:*

![Restify Benchmark](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/restifyBenchmark.PNG)

Ejecutando para *Fastify.js:*

![Fastify Benchmark](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/fastifyBenchmark.PNG)




Como se puede ver, *.js* es el más rápiod de los 3, ya que atendiendo al nº de peticiones realiza 5k peticiones más que *Fastify.js* y casi 200k más que *Restify.js* superando a éste por mucho. En cunto a **latencia media,** *Koa* y *Fastify* están muy próximos son prácticamente iguales, y *Restify* se queda muy atrás, al igual que en media de peticiones/s, por lo que *Restify* queda desclasificado. Entre los otros 2, sabiendo que tampoco ésto importa mucho ya que no vamos a erar un gran proyecto con muchísimas peticiones y sabiendo que están practicamente igualados en cuanto a peticiones/s, etc., elegiré **Fastify.js** como *framework* atendiendo a 2 cosas:
- *Koa.js* es muy usado por diferencia, y seguramente muchos compañeros lo usarán, por lo que quiero elegir alguno diferente.
- Viendo la documentación me parece que la de **Fastify.js** es más clara, concisa y bien epxlicada, además con muchas opciones como respuestas asíncronas, etc.
