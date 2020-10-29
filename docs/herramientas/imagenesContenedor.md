


# :whale2: Diferentes Imágenes: ¿Diferencias? :whale2:

---
Existen diferentes tipos de imágenes a usar, depende de el uso que queramos hacer, el tamaño, el tiempo de ejecución, los módulos a incluir y a usar, etc. Por eso debemos testear y probar diferentes tipos de imágenes para ver cuál es la que mejor se ajusta a nuestro objetivo a realizar.


Podemos encontrarnos varias imágenes, pero usaremos las **5** tipos de imágenes diferentes más comunes o más actualizadas para *Node.js.* Vamos a analizarlas y detectar cuál es la que necesitamos y por qué:

---


## node:<version>
Es la imagen por defecto. Puede ser usada tanto como contenedor como base para crear otras imágenes.  SI vamos a incluir paquetes para nuestra aplicación tenemos que indicarlos explícitamente para minimizar errores, aunque por defecto trae *paquetes Debian comunes* ya incluidos.

---

## node:<version>-alpine
Ésta imagen está basada en el *proyecto Alpine de Linux* que tiene un tamaño muy inferior a muchas imágenes y nos permite crear contenedores extremadamente ligeros. Sólamente tenemos que indicar las cosas que necesitamos en el *Dockerfile* para poder usarla sin problemas. Incluye tanto *Node.js* como *npm* como gestor de paquetes.

---

## node:<version>-slim
Ésta imagen no contiene nigún paquete común incluido. trae lo mínimo imprescindible para ejecutar *node.* Está dirigida a entornos en los que la restricción de espacio es extremadamente importante, lo cuál no es el caso.

---

## node:<version>-stretch y node:<version>-buster
La primera imagen se trata de una versión de *Debian 9.* Contiene todo lo necesario para un contenedor, estando más enfocada a las pruebas de seguridad, firewalls, etc. Es un poco más pesada.

La segunda es conocida también como *Debian 10* y es básicamente una versión más moderna de *stretch.*

En todos los casos se usará la versión **15.0.1.** debido a que se trata de la más actualizada hasta el momento.

## Imagen No Oficial del lenguaje: Alpine

Se probará también una image no oficial de *Node.js* en su versión más actualizada, la *3.12.1,* siendo un SO completamente personalizable que permite la realización de cualquier instalación que queramos además de ser la más recomendada por muchos usuarios.

---

Una vez instalados los 6, comprobamos el tamaño que ocupan:

![Imagen tamaño archivos](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/imagenesDocker.PNG)


Como se puede observar, la versión de *node normal* y la *node-stretch* ocupan casi 1Gb, lo cuál no tiene ningún tipo de sentido mantener una imagen de ese tamaño únicamente para pasar en este caso unos *tests.* Pasamos a la versión *node slim* y nos damos cuenta que no es tan *slim,* pero ya mejora a la anterior en gran medida, pero aún así la versión *node-alpine* es mucho más liviana que todas las anteriores además de ser la más "personalizable." Sin embargo la versión *alpine* sin incluir *node* pesa un **0,59%** de lo que pesa la versión normal, lo cuál nos hace descartar por completo todas las anteriores y quedarnos sólo con las 2 versiones *alpine.* Investigando en internet descubro que para poder utilizar la versión *alpine* sin *node* sería necesario instalar varios módulos, entre ellos *npm* para poder ejecutar los test, lo cuál añadiría tiempo en construcción y muchas más instrucciones en el *Dockerfile*, por tanto por ahora *node alpine* es nuestra candidata como imagen para ejecutar los test.

---

## Problemas en la ejecución

Después de innumerables horas (no las he contado pero unas 5 al día durante unos 7 días = 35 horas) intentando solucionar todos los errores habidos y por haber que me surgían, no hay manera de ejecutar los test. Siempre, pase lo que pase, sale un error de *segmentación* de memoria, incluso cuando el archivo de test está vacío, y pensaba que podía ser problema de la biblioteca que ejecuta los test, en este caso *AVA.* Cambiando esta a *Mocha* también me salían errores de segmentación, y probando con todos los comandos posibles para limpiar la caché, borrar *package-lock.json* y *node_modules,* probar con diferentes imágenes en diferentes SO's, aumentar el *heap* dedicado a la ejecución de los test, hacer *rebuild* tras instalar los módulos, dar permisos de *root,* instalar lo estrictamente necesario para que no ocupe mucho con *npm i --production,* etc. no hay manera de arreglarlo y no me puedo permitir perder más tiempo en este hito, por lo que aunque se ha subido el conteedor, los test darán error de segmentación de memoria, por lo que **no es posible ver la ejecución de los tiempos y comprobar qué imagen es mejor** ya que todas las imágenes se quedan bloqueadas. 

![Error AVA](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/errorAVA.PNG)

