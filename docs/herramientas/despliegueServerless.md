

# :satellite: Despliegue Vercel y conexión con GitHub :satellite:

---

El despliegue en *Vercel* se realiza de forma muy sencilla como se ha msotrado en los [ejercicios del tema 5 - serverless.](https://github.com/LCinder/Autoevaluacion-IV/blob/master/Tema%205%20-%20Serverless/ejerciciosTema5.md)
Como se ha indicado en ese documento, lo bueno de conectar el repositorio con *GitHub* directamente es que hay actualizaciones constantes cada vez que se realiza un *push* al igual que pasa en integración continua con plataformas como *Travis,* de ésta manera conseguimos un **despliegue continuo** sin tener que preocuparnos de nada más al actualizar ficheros u opciones del repositorio, ya que nos volveríamos locos si para cada modificación hubiera que cambiarlo en cualquier plataforma. Ésto se comprueba en el propio *GitHub* ya que al actualizar nos aparece lo siguiente:


![Despliegue Continuo](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/despliegueContinuo.PNG)

Además en la propia plataforma de *Vercel* nos muestra cómo se actualiza, el tiempo que ha pasado desde que se ha actualizado, los *logs* de la construcción, y la *url* para poder acceder a la *API*, todo en el *dashboard* como sale a continuación:


![Vercel DashBoard](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/vercelDashBoard.PNG)

---

## ¿Por qué usar Vercel?

Como he explicado antes, *vercel* es extremadamente sencillo y prácticamente no me ha dado ningún problema, al contrario que *Netflix,* digo *Netlify,* donde la *API* ya desplegada no funcionaba y es más confuso todo el proceso, por lo que he decidido quedarme con la plataforma anterior.

---

## Función serverless

Vamos a explicar qué es lo que hace nuestra función desplegada en *vercel.* Antes de nada es necesario saber qué hay en el directorio *api/:*
- Tenemos un archivo `test.js` desde donde se realiza toda la funcionalidad de la *API.*
- En relación a lo anterior, tenemos el archivo `info.json` dentro de *data* que contiene los datos a usar, en este caso los datos del objeto a crear *mesa* con sus argumentos y los *pedidos* realacionados con la misma, siendo éste un array donde tendremos objetos de tipo *pedido* con los datos de para la creación del mismo.

Ésto hace que surja un problema: No existen peticiones a otras *API's,* ni funcionalidades tipo *web scrapping,* sino que la funcionalidad principal de la aplicación es que el usuario debería indicar lo que quiere pedir, por lo que necesitaríamos de una interfaz gráfica para lo mismo y a partir de ahí se crearía el archivo *.json* correspondiente para poder operar con sentido. Para la demostración de la funcionalidad por tanto supondremos que un usuario *x* ha realizado el pedido indicado en el archivo `info.json` y ha sido almacenado exitosamente.


Desde el archivo `test.js` declaramos constantes objetos del tipo *mesa* y *pedido* que ya tenemos creados y realizaremos un `for` donde para cada dato de tipo `pedido` del fichero `info.json` creamos un objeto *pedido* y lo incluímos en el objeto *mesa* del mismo.
Por último lo **exportamos** y lo enviamos como **respuesta** en forma de cadena para mostrar por pantalla como realmente han sido incluidos satisfactoriamente en el objeto **mesa.**


![API Vercel Funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/apiVercelFunciona.PNG)








s
