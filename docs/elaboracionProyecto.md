
# :globe_with_meridians: Elaboracion proyecto :globe_with_meridians: 

***
 - **Lenguaje:** El lenguaje a usar en principio será Node.js debido a la gran variedad de bibliotecas que tiene, la comunidad tan activa que posee ya la importancia del mismo en el mundo de desarrolladores actual. Además servirá para aprender Javascript que se trata del lenguaje más usado del mundo.
  - **BBDD:**  Como base de datos se probará una BBDD NOSQL pero es posible la migracion a tablas relacionales y el uso de SQL para mejorar el servicio.
Investigando me ha atraido la atencion BBDD NoSQL como **Cassandra** pero esta un poco desactualizada, la que posee la empresa **Apache**, **MySQL** o incluso una un poco desconocida llamada **Proyecto Voldemort**. Ya solo por el nombre me atrae y dentro de estas BBDD tendre que elegir la que a corto plazo encaje mejor con el proyecto.

 - **Tareas:** Como automatizador de tareas se usará **Grunt.js** debido al enorme *ecosistema *que ofrece, además de que con el mínimo esfuerzo nos permite automatizar tareas incluso bastante complicadas, además de la extensísima documentación y comunidad activa que posee. El nº de complementos a usar es también muy elevado lo cuál me facilitará la inclusión de diferentes ideas en cuanto a las tareas. **Aviso** Se intentará usar pero debido a lo descrito en el propio [framework de AVA](https://github.com/avajs/grunt-ava) puede no ser necesario y habría que replanteárselo. En principio se coninuará siguiendo la anterior documentación y se usará *Grunt.js* si realmente se considera necesario.

 - **Framework Test:** Se usará **AVA,** que es un *test runner* para *Node.js* sencillo de usar, frecuentemente actualizado y mucho más rápido que otros como *Mocha* o *Chai* ya que éstos usan *globales implícitos* sin aislamiento de procesos, lo que los hace lentos. Además quería probar algo diferente que nadie eligiese y busqué uno no muy conocido para aprender otros tipos de *frameworks.*