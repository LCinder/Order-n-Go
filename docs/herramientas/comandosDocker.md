


# :whale2: Explicación de los comandos del archivo Dockerfile (y algunos más) :whale2:

---


`FROM x` - Un archivo *Dockerfile* válido debe empezar con esta instrucción, que indica el inicio de una etapa de construcción y establece una *imagen base.*

`RUN x` - Se ejecuta cuando se está construyendo una imagen para realizar una acción, creando una capa nueva. Se pasa como comando al sistema y se ejecuta. También se puede invocar para ejecutar programas que la imagen contenga, para ello se incluye entre comillas de la forma `RUN ["", "", ...]`

`WORKDIR` - Ésta instrucción establece un directorio de trabajo para otras instrucciones de Dockerfile, como `RUN` y `CMD`, y el directorio de trabajo para ejecutar instancias de la imagen del contenedor.
Establecemos un *WORKDIR* explícitamente ya que por defecto se crea y es mejor tenerlo creado por nosotros mismos.


`COPY x y` - Este comando copia archivos y directorios en el sistema de archivos del contenedor. Los archivos y los directorios deben encontrarse en una ruta de acceso relativa al archivo Dockerfile.


`USER` - Establece el usuario para ejecutar los contenedores de la imagen.

`CMD ["", "", ...]` - Este comando se encarga de pasar valores por defecto a un contenedor, pudiendo pasar ejecutables. A diferencia del comando RUN, los comandos que se pasen de esta manera se ejecutan una vez que el contenedor se ha inicializado, mientras que `RUN` se utiliza para crear la imagen de un contenedor.


`COPY --chown=node:node` - Copia el código de la app con los permisos apropiados al directorio de la aplicación en el contenedor, garantizando que los archivos de la app sean propiedad del usuario *no root.*


`VOLUME x` - Monta un directorio desde el host al contenedor.

---


# :whale2: Buenas prácticas en Docker :whale2:

---

Ahora que sabemos qué hace cada instrucción, se pueden seguir una serie de **buenas prácticas** para la creación del mismo:

- La avaricia rompe el saco: El hecho de incluir todos los archivos posibles nunca es buena idea, de hecho se recomienda incluir los mínimos necesarios.

- Juntar comandos: Como hemos dicho antes con el comando `RUN`, cada vez que se ejecuta estamos creando una *capa nueva,* entonces ¿realmente es necesario crear 1000 capas en cada ejecución? La respuesta es que debemos juntar ls ejecuciones seguidas de '&&' para que sea más fácil de mantener.


- Se instala lo justo y necesario: Haciendo referencia a la buena práctica anterior, no debemos instalar las dependencias sin sentido incluyendo aquellas que no hemos usado ni se usan ni se usarán, cuanto menos mejor.

- Las imágenes oficiales son nuestras aliadas: Mejor usar imágenes oficiales y/ bien documentadas y testeadas antes que intentar atajar usando imágenes de dudosa calidad para ahorrar espacio.


- Ser root lo mínimo imprescindible: El usuario root debe ser cambiado lo antes posible ya que no es buena idea tener privilegios de administrador en la ejecución. Debe cambiarse a un usuario de la aplicación, creándolo si hace falta. De manera predeterminada las imágenes incluyen un usuario *node* no root ya que se prefiere restringir las capacidades del contenedor sólo a las imprescindibles necesarias para mantener una seguridad recomendada y siguiendo las [buenas prácticas](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md) del uso de *docker ft. node.*

