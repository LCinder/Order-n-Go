

# :satellite: Creación Bot en Telegram :satellite:

---

Para la creación del bot se pensó en desplegarlo en **Google Firebase,** pero últimamente Google prefiere cobrar por todos sus servicios y al igual que ha pasado en otras asignaturas ya te piden la tarjeta para cualquier cosa. Me di cuenta de esto cando ya estaba todo preparado e incluso desplegado, pero justo en el último paso necesitábamos una URL que nos proporcionaría, pero claro para acceder a esa función, **tarjetazo.** Debido a mi reticencia a dar mi tarjeta en cualquier lado para que luego me cobren por a saber qué, pensé en desplegarlo en **Netlify.** El lenguaje a usar será el qe hemos venido usando, **Node.js** ya que es uno de los lenguajes más usados para crear bots y ya que estoy intentando aprenderlo, quiero poder relacionarlo en conjunto con todo el proyecto, ya que aprender muchos lenguajes de golpe podría hacer que colapsase, prefiero centarme en uno sólo y aprenderlo bien, además de que la plataforma a usar *Netlify* soporta muy pocos lenguajes, entre ellos *Node.js* por lo tanto contianuamos con el mismo.

Para ello, se ha creado un nuevo repositorio [bot-order-n-go](https://github.com/LCinder/bot-Order-n-Go) para incluir aquí todo lo relacionado al bot y que sea de alguna manera independiente al proyecto general, aunque luego podremos vincularlos.

Estableceremos *funciones* en la plataforma para que el bot pueda funcionar, ésto se puede realizar desde la propia interfaz web de la forma:

![Functions Netlify](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/functionsNetlify.PNG)

Previamente habiendo creado la carpeta *functions* y dentro de ella el archivo *index.js* que contiene la funcionalidad del bot.


Nos dirigimos a Telegram y mediante *@botFather* podemos crear en 3 sencillos pasos un bot, donde al finalizar  se nos dará una clave que servirá para poder manejar a nuestro bot y que debemos guardar con mucho cuidado.

Para ello nos vamos a *netlify* y como variable de entorno establecemos la clave que nos ha dado *bot Father* y que debe estar lo más protegida posible:

![Bot KEY](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/netlifyENVVariable.PNG)

Una vez tenemos todo creado, nos falta relacionar nuestro bot junto al despliegue realizado en *Netlify,* y para ello necesitamos indicar a Telegram la ubicación de nuestro bot relacionando su clave con la url necesitaremos establecer un *webhook* de la forma:

`https://api.telegram.org/botAPI_TOKEN_HERE/setWebhook?url=YOUR_NETLIFY_URL/api/bot`


Y si todo ha salido bien deberíamos obtener un mensaje como el siguiente:



![Bot Funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/botFunciona.PNG)
