

# :satellite: Creación Bot en Telegram :satellite:

---

El *bot* se creará para satisfacer, entre otros, la [HU9](https://github.com/LCinder/Order-n-Go/issues/74) para lo cuál se ha creado la [issue](https://github.com/LCinder/Order-n-Go/issues/75) para crear una función específica que ayude al usuario a saber los pedidos que lleva adjudicados a su mesa.
Como se ha querido logram independencia entre el *bot* y el proyecto en sí y están ubicados en repositorios diferentes, no es posible relacionas las *HU's* de uno con las de otro ni los *issues,* por lo que intenté unirlos mediante *submódulos* con *git submodule* pero debido a bastantes fallos que tuve y que veía que todo mi proyecto iba a acabar mal mejor pensé en dejarlo como está y establecer el mismo [issue](https://github.com/LCinder/bot-Order-n-Go/issues/2) en el repositorio del [bot.](https://github.com/LCinder/bot-Order-n-Go)


Para la creación del bot se pensó en desplegarlo en **Google Firebase,** pero últimamente Google prefiere cobrar por todos sus servicios y al igual que ha pasado en otras asignaturas ya te piden la tarjeta para cualquier cosa. Me di cuenta de esto cando ya estaba todo preparado e incluso desplegado, pero justo en el último paso necesitábamos una URL que nos proporcionaría, pero claro para acceder a esa función, **tarjetazo.** Debido a mi reticencia a dar mi tarjeta en cualquier lado para que luego me cobren por a saber qué, pensé en desplegarlo en **Netlify.** El lenguaje a usar será el qe hemos venido usando, **Node.js** ya que es uno de los lenguajes más usados para crear bots y ya que estoy intentando aprenderlo, quiero poder relacionarlo en conjunto con todo el proyecto, ya que aprender muchos lenguajes de golpe podría hacer que colapsase, prefiero centarme en uno sólo y aprenderlo bien, además de que la plataforma a usar *Netlify* soporta muy pocos lenguajes, entre ellos *Node.js* por lo tanto contianuamos con el mismo.

Para ello, se ha creado un nuevo repositorio [bot-order-n-go](https://github.com/LCinder/bot-Order-n-Go) para incluir aquí todo lo relacionado al bot y que sea de alguna manera independiente al proyecto general, aunque luego podremos vincularlos.




Estableceremos, después de haber realizado el *deploy* y previamente habiendo creado la carpeta *functions* y dentro de ella el archivo *index.js* que contiene la funcionalidad del bot, como *función* el archivo *index.js.* Ésto se puede realizar desde la propia interfaz web de la forma:

![Functions Netlify](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/functionsNetlify.PNG)


Nos dirigimos a Telegram y mediante *@botFather* podemos crear en 3 sencillos pasos un bot, donde al finalizar  se nos dará una clave que servirá para poder manejar a nuestro bot y que debemos guardar con mucho cuidado.

Para ello nos vamos a *Netlify* y como variable de entorno establecemos la clave que nos ha dado *bot Father* y que debe estar lo más protegida posible:

![Bot KEY](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/netlifyENVVariable.PNG)

Una vez tenemos todo creado, nos falta relacionar nuestro bot junto al despliegue realizado en *Netlify,* y para ello necesitamos indicar a Telegram la ubicación de nuestro bot relacionando su clave con la url necesitaremos establecer un *webhook* de la forma:

`https://api.telegram.org/botAPI_TOKEN_HERE/setWebhook?url=YOUR_NETLIFY_URL/api/bot`


Y si todo ha salido bien deberíamos obtener un mensaje como el siguiente:



![Bot Funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/botFunciona.PNG)






En este  punto el *bot* está funcionando, pero ¿qué hace y cómo lo hace?

Para saber qué hace previamente tenemos que saber que la estructura básica de un *bot* en *Telegram* es responder a los comandos que indica el usuario, ésto se realiza con la función `command` mientras que dentro de la misma responderemos al usuario con llamando a la función `reply` para indicar qué mensaje queremos enviarle. Esto se usa por ejemplo para el comando `help` para indicar qué opciones existen.


Pasamos a la funcionalidad importante del *bot,* y es que habiendo realizado la función *serverless* del proyecto y la *API* de la misma, desde el *bot* realizaremos peticiones a esa *API* mediante el módulo *node-fetch* para que nos devuelva una respuesta en formato *JSON* que luego *parsearemos* para devolver una cadena de texto (aplicando `.text` a la respuesta obtenida antes) al usuario, todo esto dentro de un `try catch` para evitar errores.


~~~

bot.command("pedido", (ctx) => {
	const getData = async url => {
		try {
			const response = await fetch(url);
			const json = await response.text();
			ctx.reply(json);
		} catch (error) {
			console.log(error);
		}
	};

	getData(url);

});
~~~



 De esta manera estamos consiguiendo 3 cosas importantes:
- Poder **independizar** el *bot* del proyecto general para que los cambios en uno no afecte a los del otro.
- Realizar peticiones a una *API* independiente y **olvidarnos de toda la lógica detrás de la misma,** sólo nos interesa el resultado.
- Aprender a manejar el fichero pedido mediante **peticiones asíncronas.**

La *url* la guardamos al igual que el *token* en una variable de entorno, cuanta menos información demos a gente desconocida mejor.

De esta manera cuando el usuario escribe `/pedido` el *bot* realiza una petición a la *API* del proyecto general desplegado en *Vercel,* obtiene el archivo *JSON* respuesta y lo muestra al usuario.


El bot es accesible [desde el siguiente enlace](https://t.me/orderngobot) y a continuación podemos ver cómo funciona:




![Bot Chat](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/botChat.PNG)
