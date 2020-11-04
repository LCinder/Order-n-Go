# :mag: Order'n'Go :mag:
---
### Proyecto asignatura Infraestructura Virtual de la UGR.

API que gestiona los pedidos y la cuenta de y en cada mesa en un restaurante.

***

## :pencil2: Descripción :pencil2:

En plena era COVID-19 muchos restaurantes se han visto abocados al cierre debido a la incapacidad de mantener a sus empleados ante la crisis venidera y guardar las distancias.
Pero ¿y si sólo requiriésemos de un dispositivo en cada mesa (de cada persona, en principio) en el cual hiciéramos nosotros mismos el pedido?
¿Cuántas veces tenias prisa por que te atendieran o para pedirle al camarero saturado la cuenta?
¿Cuántas veces te has puesto nervioso/a y querias cambiar de eleccion justo cuando el camarero está tomando nota?

---

Con Order'n'Go tú mismo harás el pedido en tu mesa cambiando los platos en el momento que quieras, pedirás tu cuenta cuando quieras y manteniendo las distancias en este año de paranoia 2020 que a saber que más nos trae. El camarero solo tendrá que traer/recoger los platos con lo cual el restaurante sera mas eficiente pudiendo gestionar las mesas más rápido, con la consiguiente mejora del servicio y las ganancias.

---


## :cyclone: Historias de Usuario :cyclone:

Enlace para acceder a las [HU](https://github.com/LCinder/Order-n-Go/issues) establecidas como *issues*.
- [|HU1| - Como usuario, quiero seleccionar el nº de personas a ocupar en mesa ](https://github.com/LCinder/Order-n-Go/issues/1)
- [|HU2| - Como usuario quiero poder realizar cualquier pedido (platos) en cualquier momento](https://github.com/LCinder/Order-n-Go/issues/2)
- [|HU3| - Como usuario quiero pagar la cuenta directamente sin esperas ](https://github.com/LCinder/Order-n-Go/issues/3)
- [|HU4| - Como usuario quiero poder cambiar los platos una vez realizado el pedido](https://github.com/LCinder/Order-n-Go/issues/4)
- [|HU5| -Como usuario quiero cambiar los ingredientes de los platos a elegir](https://github.com/LCinder/Order-n-Go/issues/26)
- [|HU6| - Como usuario quiero poder dar propina al finalizar el servicio](https://github.com/LCinder/Order-n-Go/issues/27)
- [|HU7| - Como usuario quiero eliminar pedidos (platos) incluso después de haberlos seleccionado](https://github.com/LCinder/Order-n-Go/issues/28)

---

## :globe_with_meridians: Issues y Milestones :globe_with_meridians:

Enlace para acceder a todos los [issues cerrados (ya realizados)](https://github.com/LCinder/Order-n-Go/issues?q=is%3Aissue+is%3Aclosed) y a los [milestones](https://github.com/LCinder/Order-n-Go/milestones) que se dividen en diferentes versiones del proyecto a lo largo de la asignatura

---

## :information_source: Documentación y lenguajes a usar :information_source:

- Enlace a la carpeta [docs](https://github.com/LCinder/Order-n-Go/tree/master/docs) con todos los documentos que contiene entre otros los [pasos a seguir en el proyecto](https://github.com/LCinder/Order-n-Go/blob/master/docs/stepsProyecto.md) y toda la información de las [herramientas necesarias para la creación del servicio](https://github.com/LCinder/Order-n-Go/blob/master/docs/elaboracionProyecto.md) (BBDD, framework test, lenguaje, etc)

- Lenguaje a usar: Se usará *Node.js* debido a las [siguientes razones](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/nodejs.md)
- Gestor de paquetes: Se usará *npm* como gestor debido a las razones que se [detallan aquí](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/npm.md)
- Test: Para la realización de los *test* se ha usado [AVA](https://github.com/avajs/ava), un *framework* poco conocido que supera en tiempo de ejecución a los frameworks de *Node.js* más usados y además permite ejecución asíncrona y está especialmente destinada a proyectos no muy grandes, como es el caso.



---


## :triangular_flag_on_post: Archivo iv.yaml :triangular_flag_on_post:

Enlace al archivo [iv.yaml](https://github.com/LCinder/Order-n-Go/blob/master/iv.yaml)

---

## :thought_balloon: Ideas :thought_balloon:
Enlace para acceder a [todas las ideas](https://github.com/LCinder/Order-n-Go/blob/master/docs/ideas.md) que se me ocurren para el servicio, tanto las realizables como las descartables

---

## :chart_with_upwards_trend: Código :chart_with_upwards_trend:
- Enlace para acceder a la clase  [Mesa](https://github.com/LCinder/Order-n-Go/blob/master/src/mesa.js) 
- Enlace para acceder a la clase  [Pedido](https://github.com/LCinder/Order-n-Go/blob/master/src/pedido.js) 
- Enlace para acceder a la carpeta [sources](https://github.com/LCinder/Order-n-Go/tree/master/src) que contiene todos los archivos necesarios para el mismo.

---

## :whale2: Docker :whale2: 
Ejecución y creación de un contenedor en *Docker:*

- Primero se valoran las imágenes del contenedor para *Node.js* y elegimos cuál es mejor [en este enlace](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/imagenesContenedor.md)
- Se crea el [Dockerfile](https://github.com/LCinder/Order-n-Go/blob/master/Dockerfile) y se explican [los comandos y las buenas prácticas a seguir](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/comandosDocker.md) para la creación del mismo
- Se crea perfil en *DockerHub* y se explica [cómo conectar GitHub con el mismo](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/dockerHub.md) y se incluye el [enlace al repositorio en DockerHub](https://hub.docker.com/repository/docker/lcinder/order-n-go)

- La optimización de la imagen [se incluye aquí](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/optimizacionDocker.md)

- Además se ha subido el contenedor a un registro alternativo, en este caso GitHub Container Registry, y [aquí se indica](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/ghcr.md) cómo se ha realizado y cómo se ha subido.

- [Enlace al paquete](https://github.com/LCinder/Order-n-Go/packages/482554) del proyecto.

- Para descargar el contenedor se realiza:
`docker pull lcinder/order-n-go:3.0`

- Para ejecutar los test se utiliza el comando:
~~~
docker run -t -v `pwd`:/test lcinder/order-n-go:3.0
~~~

---

## :scroll: Integración Continua CI :scroll: 

- Primero realizamos [registro en *TravisCI*](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/signUpTravis.md)

- Luego realizamos [explicación de cómo funciona y se ejecuta *Travis*](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/travisEx.md)

- Se comparan diferentes [plataformas de CI](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/comparacionPlataformasCI.md) adicionales a *Travis*

- Se elige la plataforma [Shippable y se explica el registro y la ejecución](https://github.com/LCinder/Order-n-Go/blob/master/docs/herramientas/shippableEx.md) adicionales a *Travis*

