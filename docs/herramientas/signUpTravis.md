
# :scroll: Registro en TravisCI :scroll:

---

A continuación se indican los pasos seguidos para registrarnos en *TravisCI:*

- Primero nos registramos directamente con la cuenta de *GitHub* ahorrándonos bastantes pasos y autorizamos el acceso a nuestros repositorios

![Travis Registro](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisSignUp.PNG)

- Una vez registrados, en *Ajustes* activamos la *GitHub Apps Integration* para que *Travis* pueda ejecutarse usando nuestros repositorios y sincronizamos la cuenta en la misma página

![Travis Activación](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisActivar.PNG)

- Y seleccionamos el repositorio donde queremos que se instale la *GitHub App* aprobándolo e instalándolo

![Travis Instalar](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/travisInstalar.PNG)

- Una vez con todo esto realizado, simplemente nos queda cear en el repositorio un archivo de configuración con la estructura `.travis.yml` y automáticamente en el sistema *Travis* se detectará el mismo y pasará a ejecutarse lo indicado en el archivo, pero eso lo dejamos para la ejecución.
