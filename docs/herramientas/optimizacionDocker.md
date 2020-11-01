


# :whale2: Optimización Docker :whale2:

---

Dentro de las buenas prácticas a realizar en contenedores en la de **optimizar** tanto en velocidad como en tamaño el contenedor. 
Trataremos de optimizar en tamaño ya que la imagen se va a varios cientos de MB y creo que es posible tratar de reducirl mediante una serie de pasos, primero a incluir dentro del *Dockerfile.* Ésto se realiza **al crear el contenedor, y no después** para que la optimización sea desde el inicio.

- Instalar sólo lo necesario: Instalar los módulos incluye todas las dependencias de desarrollo y todas las dependencias de tiempo de ejecución, pudiendo ser un costo importante. Como la app no necesita precompilación (es JavaScript simple que Node puede ejecutar directamente), incluímos `--only=production` que reducirá el tamaño.

- Elegir imagen ligera: Por esto mismo hemos elegido como imagen base una que se basa en *alpine,* ya que se trata de la más ligera y mejora en gran medida el tamaño del contenedor.

- Limpiar la *caché:* Con `npm cache clean --force` podemos limpiar la *caché* una vez instalados los módulos, ahorrando bastante espacio, ya que me di cuenta que ésto parece que no pero si ocupa bastante en memoria.

Con estos 3 pasos se reduce la imagen del contenedor en gran medida, ya que al ir incluyendo cada ve más cosas al contenedor se hará inmanejable, por lo que es buena práctica optimizar en tamaño el mismo.