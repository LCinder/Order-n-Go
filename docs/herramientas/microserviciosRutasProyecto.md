

# :book: Microservicio Order'n'Go :book:

---

Para crear todo lo relacionado con rutas, URI's, etc. primero debemos entender que queremos un proyecto del tipo Modelo-Vista-Controlador, es decir la lógica de negocio no estará realcionada con la Vista del usuario ni con nada más. Este desacople nos permitirá cambiar, modificar añadir o borrar cualquier cosa del código sin que afecte al resto de apartados en ningún aspecto, además de que el código queda mucho más limpio y organizado. Para ello se crea la clase [modelo.js](https://github.com/LCinder/Order-n-Go/blob/master/src/modelo.js) que contiene todo el código necesario que se usará para las rutas en funciones específicas para cada una de las mismas, en donde todas devolverán **{valor: x, code: x}** donde *valor* será la cadena que contiene el resultado de aplicar la función (recibir pedidos, asegurar que se ha eliminado un pedido, etc.) y el código corresponde al estado devuelto siguiendo los [códigos de HTTP.](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

La clase [routes.js](https://github.com/LCinder/Order-n-Go/blob/master/src/routes.js) incluye todas las rutas a utilizar con los parámetros, etc. y toda la funcionalidad que debería realizarse, creando antes un objeto de la clase *modelo* anterior mediante la cuál se llamarán a las funciones.



Se ha mejorado bastante el código para que ahora tenga más sentido crear un pedido, mesa, etc. Además, como la intención es que existan platos ya predefinidos con su id, nombre, precio, etc. para que el usuario simplemente los pida de una lista ya existente como en cualquier restaurante, se ha creado un fichero [infoPedidos.json](https://github.com/LCinder/Order-n-Go/blob/master/src/infoPedidos.json) que contiene esta información. Posteriormente podria almacenarse en una BBDD, o de cualquier otra manera, o incluir nombres de platos verdaderos con su id específico para que fuera más real.

Además como ejemplo se ha creado otro fichero [info.json](https://github.com/LCinder/Order-n-Go/blob/master/api/data/info.json) que contiene un ejemplo con las mesas, pedidos de las mismas, etc. como si se tratase de un instante concreto cualndo estuviera en funcionamiento el proyecto, todos los datos son inventados para que sirva como ejemplo.

Se han creado también bastantes funcionalidades atendiendo a las **HU's,** creando una ruta por cada *HU* para satisfacerla. Las rutas se dividen en varias atendiendo a si realizamos peticiones para que devuelvan algo (*GET*) o si queremos añadir algo (*PUT*) o incluso si quereoms borrar algo (*DELETE.*)
Cabe destacar que aunque a priori no tenga sentido ya que no existe persistencia de datos (ya que devolvemos siempre una cadena de texto), cuando si que exista no tendremos que ir cambiando el tipo de petición, sino que ya estarán bien establecidas.

Las rutas a probar son:
Realizando peticiones **GET:**
- `/mesa/:numero_mesa` p.ej: `mesa/2`
- `/mesa/:numero_mesa/pedido/:idPedido` p.ej: `/mesa/5/pedido/2`

Realizando peticiones **PUT:**
- `/mesa/:numero_mesa/pedido/:idPedido/cantidad/:cantidad` p.ej: `/mesa/2/pedido/5/cantidad/1`
- `/mesa/:numero_mesa/pedido/:idPedido/id/:id` p.ej: `/mesa/5/pedido/1/id/2`
- `/mesa/:numero_mesa/nuevopedido/:idNuevoPlato/:cantidad` p.ej: `/mesa/9/nuevopedido/10/2`
- `/mesa/:numero_mesa/pedido/:idPedido/ingredientes/:ingredientes` p.ej: `/mesa/7/pedido/5/ingredientes/Curry, Otro`
- `/mesa/:numero_mesa/usuarios/:usuarios` p.ej: `/mesa/6/usuarios/8`
- `/mesa/:numero_mesa/pedirCuenta` p.ej: `/mesa/5/pedirCuenta`
- `/mesa/:numero_mesa/pagarPorSeparado` p.ej: `/mesa/1/pagarPorSeparado`

Realizando peticiones **DELETE:**
- `/mesa/:numero_mesa/pedido/:idPedido/eliminar` p.ej: `/mesa/9/pedido/5/eliminar`

---

Como incluir aquí todo el código tanto de [routes.js](https://github.com/LCinder/Order-n-Go/blob/master/src/routes.js) como de [modelo.js](https://github.com/LCinder/Order-n-Go/blob/master/src/modelo.js) sería una locura ya que haría que el documento fuera larguísimo, vamos a poner un ejemplo de cómo se ha realizado para la HU1, el código de ambas clases y una imagen de cómo funciona. Para el resto de HU's se incluye sólo la imagen de que funciona, ya que seguirán el mismo patrón en las 2 clases.

Para todos los ejemplos se usará la **mesa 2** que contiene:
- **Usuarios:** 6
- **Pedidos:**
	- Pedido 1: Plato nº1, tipo Principal, cantidad 1, para el usuario 1
	- Pedido 2: Plato nº2, tipo Secundario, cantidad 1, para el usuario 1
	- Pedido 3: Plato nº3, tipo postre, cantidad 1, para el usuario 1
- No hay comentarios ni ingredientes opcionales


**Historia de Usuario 1:** Como usuario, quiero seleccionar el nº de personas a ocupar en mesa

En clase *routes.js:*

~~~
fastify.put("/mesa/:numero_mesa/usuarios/:usuarios", async (req, res) => {
	let result = model.cambiarUsuariosPUT(req.params.numero_mesa,
	req.params.usuarios)

	res.send(result.valor).code(result.code);
});
~~~

En clase *model.js:*

~~~
cambiarUsuariosPUT(numero_mesa, usuarios) {
	try {
		let numeroMesa = numero_mesa
		let mesa = mesas[numeroMesa-1]
		let usuarios = usuarios

		mesa.modificarUsuarios(usuarios);

		return  {valor: "Mesa " + mesa.getMesa() + ": " + mesa.toString(), code: 201};
	}
	catch (err) {
		return {valor:  "No se pueden cambiar los usuarios" + err, code: 404};
	}
}
~~~

Según las buenas prácticas siempre utilizaremos estructuras del tipo *try/catch* para evitar que salgan errores inesperados en el código, a que para ello se crea un mensaje personalizado seguido del error y también se envía un código de error específico. Como puede verse el objeto *mesa* llama a una función que ha sido específicamente creada para el hito (en realidad ya existía pero se ha modificado para que sea todo más claro) que cambia el nº de usuarios en la mesa y devuelve el valor (en este caso los datos de la mesa para comprobar que se han modificado) y el código de que ha funcionado, en este caso 200.

Abajo se muestra cómo funciona el realizar la petición:

`curl --request PUT http://localhost:5000/mesa/2/usuarios/8`

![microserviciosHU1](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU1.PNG)

---


**Historia de Usuario 2:** Como usuario quiero poder realizar cualquier pedido

`curl --request PUT http://localhost:5000/mesa/2/nuevopedido/5/8`

![microserviciosHU2](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU2.PNG)

---

**Historia de Usuario 3:** Como usuario quiero pagar la cuenta

`curl --request PUT http://localhost:5000/mesa/2/pedirCuenta`

![microserviciosHU3](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU3.PNG)

---

**Historia de Usuario 4:** Como usuario quiero poder cambiar los platos una vez realizado el pedido

Para los platos pueden cambiarse diferentes características, como:
- ID del pedido (es decir se cambia el plato entero): `curl --request PUT http://localhost:5000/mesa/2/pedido/1/id/10`
![microserviciosHU41](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU41.PNG)

- Cantidad del mismo: `curl --request PUT http://localhost:5000/mesa/2/pedido/1/cantidad/8`

![microserviciosHU42](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU42.PNG)

---

**Historia de Usuario 5:** Como usuario quiero cambiar los ingredientes de los platos a elegir

`curl --request PUT http://localhost:5000/mesa/2/pedido/1/ingredientes/Curry,Otro`

![microserviciosHU5](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU5.PNG)

---

Historia de Usuario 7: Como usuario quiero eliminar pedidos (platos) incluso después de haberlos seleccionado

`curl --request DELETE http://localhost:5000/mesa/2/pedido/1/eliminar`

![microserviciosHU7](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU7.PNG)

---

**Historia de Usuario 8:** Como usuario quiero pagar por separado

`curl --request PUT http://localhost:5000/mesa/2/pagarPorSeparado`

![microserviciosHU8](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU8.PNG)

---

**Historia de Usuario 9:** Como usuario quiero saber qué pedidos he realizado

Para los pedidos se pueden solicitar:
- todos los pedidos (es decir se cambia el plato entero): `curl --request GET http://localhost:5000/mesa/2`

![microserviciosHU91](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU91.PNG)

- Un pedido en específico indicado por su ID: `curl --request GET http://localhost:5000/mesa/2/pedido/2`

![microserviciosHU92](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/microserviciosHU92.PNG)

---


## Buenas Prácticas

Se han tenido en cuenta  **buenas prácticas** en cuanto a *microservicios* como por ejemplo:

- **Utilización de modelo asíncrono de peticiones:** Para que no exista error en cuanto a peticiones como *GET* porque no se ha esperado a la petición, o a la hora de pasar los *test* ya que si hacemos *POST* sin modelo asíncrono y luego se comprueba que se ha cambiado puede dar error incluso habiéndose realizado correctamente el cambio. En el código y en caso de *Javascript* lo realizamos con **async** para funciones.

- 





















.
