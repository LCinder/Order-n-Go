

# :satellite: Despliegue Vercel y conexión con GitHub :satellite:

---

Para registrarnos en *Vercel,* seguiremos los pasos que se nos indican en la página principal. Lo mejor es vincular la cueta de *GitHub* permitiendo el acceso en la misma de *Vercel* para que se puedapermitir el **despliegue continuo** posteriormente, es decir que al hacer *push* al repositorio se auto-despliegue el nuevo proyecto en *Vercel.*

![Vercel Registro](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelSignUp.PNG)


Incluímos el repositorio que queremos, en este caso el del proyecto general de la asignatura y le damos a continuar.

![Vercel Import](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelImport.PNG)


Veremos cómo empieza a construirse el mismo clonando nuestro repositorio de *GitHub.*

![Vercel Deploy](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelDeploy.PNG)


Y por último nos muestra un mensaje de que va todo bien.

![Vercel Congrats](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelCongrats.PNG)


Lo que nos faltaría sería ejecutar en consola el comando `vercel` para relacionar el repositorio de *GitHub* con el directorio donde se encuentra el proyecto.

![Vercel Comando](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelComando.PNG)

Después de haberlo unido, ejecutamos `vercel --prod` para desplegarlo en producción  y que esté completamente funcional el despliegue en *Vercel.*

![Vercel Prod](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelProd.PNG)


**Importante - Despliegue Continuo:** Lo bueno de conectar el repositorio con *GitHub* directamente es que hay actualizaciones constantes cada vez que se realiza un *push* al igual que pasa en integración continua con plataformas como *Travis,* de ésta manera conseguimos un **despliegue continuo** sin tener que preocuparnos de nada más al actualizar ficheros u opciones del repositorio, ya que nos volveríamos locos si para cada modificación hubiera que cambiarlo en cualquier plataforma. Ésto se comprueba en el propio *GitHub* ya que al actualizar nos aparece lo siguiente:


![Despliegue Continuo](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/despliegueContinuo.PNG)

Además en la propia plataforma de *Vercel* nos muestra cómo se actualiza, el tiempo que ha pasado desde que se ha actualizado, los *logs* de la construcción, y la *url* para poder acceder a la *API*, todo en el *dashboard* como sale a continuación:


![Vercel DashBoard](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelDashboard.PNG)

---

## Por qué usar Vercel y Prueba

Como he explicado antes, *vercel* es extremadamente sencillo y prácticamente no me ha dado ningún problema, al contrario que *Netflix,* digo *Netlify,* donde la *API* ya desplegada no funcionaba y es más confuso todo el proceso, por lo que he decidido quedarme con la plataforma anterior.

Pasamos ahora a comprobar que funciona una sencilla prueba que se encuentra en la [página oficial](https://vercel.com/docs/runtimes#official-runtimes/node-js) de *Vercel* para el lenguaje *Node.js* la cuál consta del siguiente [código del archivo prueba.js](https://github.com/LCinder/Order-n-Go/blob/master/api/prueba.js):



~~~

module.exports = (req, res) => {
  const { name = 'Desconocido' } = req.query
  res.status(200).send(`Holaa ${name}!`)
}

~~~

Que básicamente lo que realiza es asignar a una variable *name* el nombre desnococido si se da el caso de que la petición no contiene *name,* en el caso de que sí lo contenga (como en el caso siguiente) la asigna a la variable y envía como respuesta (con *status* 200 que indica que no hay error) una saludo personalizado, y como vemos abajo se muesra si vrealizamos una petición a la *API* de *Vercel.*


![Prueba Vercel Api](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/pruebaVercelApi.PNG)

---

## Función serverless

Vamos a explicar qué es lo que hace nuestra función desplegada en *vercel.* Antes de nada es necesario saber qué hay en el directorio *api/:*
- Tenemos un archivo `test.js` desde donde se realiza toda la funcionalidad de la *API.*
- En relación a lo anterior, tenemos el archivo `info.json` dentro de *data* que contiene los datos a usar, en este caso los datos del objeto a crear *mesa* con sus argumentos y los *pedidos* realacionados con la misma, siendo éste un array donde tendremos objetos de tipo *pedido* con los datos de para la creación del mismo.

Ésto hace que surja un problema: No existen peticiones a otras *API's,* ni funcionalidades tipo *web scrapping,* sino que la funcionalidad principal de la aplicación es que el usuario debería indicar lo que quiere pedir, por lo que necesitaríamos de una interfaz gráfica para lo mismo y a partir de ahí se crearía el archivo *.json* correspondiente para poder operar con sentido. Para la demostración de la funcionalidad por tanto supondremos que un usuario *x* ha realizado el pedido indicado en el archivo `info.json` y ha sido almacenado exitosamente.


Desde el archivo [test.js](https://github.com/LCinder/Order-n-Go/blob/master/api/test.js) declaramos constantes objetos del tipo *mesa* y *pedido* que ya tenemos creados:

~~~
const mesascr = require("../src/mesa.js")
const pedido = require("../src/pedido.js")

const mesa = new mesascr.Mesa(datos.mesa.mesaN, datos.mesa.personas, datos.mesa.cuenta, datos.mesa.ocupada)

~~~
Y realizaremos un `for` donde para cada dato de tipo `pedido` del fichero `info.json` creamos un objeto *pedido* y lo incluímos en el objeto *mesa* del mismo, para pasar de un *JSON* a los objetos específicos del proyecto y poder realizar la funcionalidad de forma adecuada.

~~~
for (let i=0; i < datos.pedidos.length; i++) {
	mesa.incluirPedido(datos.pedidos[i].plato, datos.pedidos[i].tipoPlato, datos.pedidos[i].cantidad,
	datos.pedidos[i].precio, datos.pedidos[i].ingredientesEvitar, datos.pedidos[i].comentarioOpcionalPlato, datos.pedidos[i].usuario)
}

~~~

Por último lo **exportamos** y lo enviamos como **respuesta** en forma de cadena para mostrar por pantalla como realmente han sido incluidos satisfactoriamente en el objeto **mesa.**

~~~
module.exports = (req, res) => {
	res.send("Los pedidos para la mesa: " + mesa.getMesa() + " son: \n" + mesa.mostrarPedidos())
}

~~~

Y a continuación se muestra cómo funciona (queda un poco mal porque no se incluyen retornos de carro pero está hecho así para que cuando el *bot* en *Telegram* responda lo haga de manera más organizada).

![API Vercel Funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/apiVercelFunciona.PNG)
