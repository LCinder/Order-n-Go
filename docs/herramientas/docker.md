
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
