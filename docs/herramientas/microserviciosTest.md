

# :book: Test Microservicio :book:

---

Para realizar los test asociados al microservicio se usará *supertest* explicado en el hito actual, *mocha* y *chai* que son bibliotecas de *testeo* que no había usado antes y que funcionan muy bien con *supertest,* además de que el modo de *testear* con *chai* es llamando a las funciones de manera parecida al lenguaje natural, lo cuál lo hace bastante sencillo de enteder y ver dónde falla. Se realizará un test por cada función creada para cada ruta en el archivo [routes.js](https://github.com/LCinder/Order-n-Go/blob/master/src/routes.js) comprobando que devuelve el código adecuado y para cada ruta se comprueba que devuelva como texto algo particular de la función, como por ejemplo al eliminar un plato que se devuelva el texto: *eliminado* ya que sólo se envía cuando de verdad el pedido ha sido eliminado. Además será común para todas las funciones comprobar que lo que se devuelve es un *string.*

El archivo de test es [apiTest.js] y como se ha indicado antes se utilizará *chai,* y aunque existen muchos métodos como *should,* éste a veces da error, por tanto usaremos en concreto el método *expect.*

Como en total hay **11 funciones** de testeo y el código quedaría bastante largo, indicamos una de ellas para explicarla ya que las demás son parecidas.

Primero se realiza una petición asíncrona con el *URI* específico, que devolverá una *Promesa* de la cuál obtendremos el código de estado, comprobando que sea igual a *200,* es decir que todo funciona, y como hemos dicho antes comprobamos que el texto de la *Promesa* sea un *string* y que incluya *Plato,* ya que ésto sólo se incluye si ha funcionado y se obtiene una lista de platos. No haría falta poner la cadena entera ya que haría el código más difícil de leer y si ha devuelto *Plato* es que el resto ha funcionado. Se usa *expect* como hemos indicado antes pasando como argumento lo que queremos comprobar seguido de llamadas en lenguaje natura de las características a comprobar.

~~~
describe("GET /mesa/2", function () {
	it("Muestra informacion mesa 2", async function () {
			const response = await supertest.get("/mesa/2")
			expect(response.status).to.eql(200)
			expect(response.text).to.be.a("string").to.include("Plato")
		});
});
~~~

Para ejecutarlos realizamos:

`mocha tests/apiTest.js` aunque también se ha incluido en *scripts* de *package.json* un atajo para que sea más sencillo, por lo que también funciona si ejecutamos:

`npm apiTest`

Después de ejecutar los test comprobamos que funcionan:

![microserviciosApiTest](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosApiTest.PNG)
