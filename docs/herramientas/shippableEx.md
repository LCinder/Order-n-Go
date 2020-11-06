


# :scroll: Creación y Ejecución Shippable :scroll:

---

Después de haber elegido otro sistema de *integración continua,* en este caso **Shippable,** vamos a registrarnos en el mismo de la forma:

El registro es muy parecido al de *Travis,* teniendo que permitir al principio el acceso a nuestros repositorios de *GitHub* ya que de esta manera es más rápido y sencillo como se indica abajo

![Shippable Sign Up](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/shippableSignUp.PNG)

Una vez registrados, se nos indican todos nuestros repositorios y tendremos que habilitar el repositorio en que queremos trabajar

![Shippable Creación](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/shippableCreacion.PNG)

Una vez habilitado, creamos un archivo [shippable.yml](https://github.com/LCinder/Order-n-Go/blob/master/shippable.yml) y de la misma manera que hicimos con *.travis.yml* establecemos parámetros (en este caso los mismos que ese archivo) y automáticamente detectará los cambios en el repositorio y pasará a ejecutarse lo especificado en `shippable.yml` dándonos un resultado cuando la ejecución haya terminado. Se utiliza el lenguaje *Node.js* para ver las diferencisa de tiempo entre *Travis* usando lenguaje minimal y *Shippable* con las distintas vriones de *Node.js* y la diferencia de tiempo es notable, teniendo en cuenta también que *Travis* permite ejecución concurrente y *Shippable* no.

![Shippable Build Funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/shippableBuildFunciona.PNG)

