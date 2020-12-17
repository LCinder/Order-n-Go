

# :book: Test Microservicio :book:

---

Para realizar los test asociados al microservicio se usará *supertest* explicado en el hito actual, *mocha* y *chai* que son bibliotecas de *testeo* que no había usado antes y que funcionan muy bien con *supertest,* además de que el modo de *testear* con *chai* es llamando a las funciones de manera parecida al lenguaje natural, lo cuál lo hace bastante sencillo de enteder y ver dónde falla. Se realizará un test por cada función creada para cada ruta en el archivo [routes.js](https://github.com/LCinder/Order-n-Go/blob/master/src/routes.js) comprobando que devuelve el código adecuado y para cada ruta se comprueba que devuelva como texto algo particular de la función, como por ejemplo al eliminar un plato que se devuelva el texto: *eliminado* ya que sólo se envía cuando de verdad el pedido ha sido eliminado. Además será común para todas las funciones comprobar que lo que se devuelve es un *string.*

El archivo de test es [apiTest.js] y como se ha indicado antes se utilizará *chai,* y aunque existen muchos métodos como *should,* éste a veces da error, por tanto usaremos en concreto el método *expect.*

Como en total hay **11 funciones** de testeo y el código quedaría bastante largo, indicamos una de ellas para explicarla ya que las demás son parecidas.

Primero se realiza una petición asíncrona con el *URI* específico, que devolverá una *Promesa* de la cuál obtendremos el código de estado, comprobando que sea igual a *200,* es decir que todo funciona, y como hemos dicho antes comprobamos que el texto de la *Promesa* sea un *string* y que incluya *Plato,* ya que ésto sólo se incluye si ha funcionado y se obtiene una lista de platos. No haría falta poner la cadena entera ya que haría el código más difícil de leer y si ha devuelto *Plato* es que el resto ha funcionado. Se usa *expect* como hemos indicado antes pasando como argumento lo que queremos comprobar seguido de llamadas en lenguaje natural de las características a comprobar.

Se han realizado diferentes test **atendiendo a todas las HU's** y dentro de éstas, como por ejemplo la [HU4 - Como usuario quiero poder cambiar los platos una vez realizado el pedido](https://github.com/LCinder/Order-n-Go/issues/4) en la que se pueden cambiar diferentes características de un plato (id o cantidad)  se ha creado un *test* para cada valor diferente a tomar (en este caso id o cantidad).

Después de realizar una petición de tipo *PUT,* *POST* o *DELETE* se ha realizado otra petición de tipo *GET* para comprobar que realmente se ha modificado, creado o borrado, respectivamente.

Un ejemplo de los test sería el siguiente:

~~~
describe("GET /2", function () {
	it("Muestra informacion mesa 2", async function () {
			const response = await supertest.get("/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Plato")
		});
});
~~~

Para ejecutarlos realizamos:

`mocha tests/apiTest.js` o `npm test`

Después de ejecutar los test comprobamos que funcionan:

![microserviciosApiTest](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosApiTest.PNG)

---

## Subir imagen a Docker y enlazado a GitHub

Al igual que hicimos en hitos anteriores, vamos a subir la imagen de docker de los tests de la API y vamos a enlazarla a GitHub como se indicaba en [el documento correspondiente](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/ghcr.md) incluyendo os pasos:

- Crear el contenedor: `docker build -t docker.pkg.github.com/lcinder/order-n-go .`
- Subir el contenedor: `docker push docker.pkg.github.com/lcinder/order-n-go`

 Por lo que tendremos la imagen de Docker que realiza los tests de la API que corresponden a **las Historias de Usuario ya indicadas en el archivo** [routes.js](https://github.com/LCinder/Order-n-Go/blob/master/src/routes.js), por lo que podremos hacer *pull* mediante:
`docker pull docker.pkg.github.com/lcinder/order-n-go:latest` o con `docker pull lcinder/order-n-go:latest`

 y ejecutarla con `docker run -t -v `pwd`:/test docker.pkg.github.com/lcinder/order-n-go:latest` o con `docker run -t -v `pwd`:/test lcinder/order-n-go:latest`

 y obtendremos que los 20 test han pasado satisfactoriamente:


 ![microserviciosTestFunciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosTestFunciona.PNG)
