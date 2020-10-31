


# :whale2: GitHub Container Registry :whale2:

---

para subir la imagen a un registro alternativo se ha optado por *GitHub Container Registry* ya que se valoró subirlo a *Azure* pero existía una versión de prueba al igual que *AWS,* por lo que al final se ha decidido subido a *ghcr* y enlazarlo a *GitHub.*

A continuación se demuestra cómo se despliega nuestro contenedor a *GitHub Container Registry:*

Se  siguen los siguientes pasos incluidos en la [documentación oficial](https://docs.github.com/es/free-pro-team@latest/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images):

- Creamos un *TOKEN* desde el apartado *Developer Settings* en *GitHub* marcando en este caso todas las opciones de acceso (porque si no daba error de login, error que no me pase a mí no existe) y lo copiamos y guardamos en una variable de la manera: `export CR_PAT=TOKEN`

- Nos logueamos con nuestro *TOKEN* en *docker* para poder subir la imagen de la forma: `echo $CR_PAT | docker login ghcr.io -u lcinder --password-stdin`

-  Una evz realizado lo anterior simplemente nos queda subir la imagen con la extensión adecuada: `docker push ghcr.io/lcinder/order-n-go` y comprobamos que se ha subido correctamente:

![Imagen subida](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/ghcr.PNG)

- Ahora nos queda enlazarlo a *GitHub* yéndonos al repositorio y en el margen derecho a *Packages* y simplemente seguir los pasos que se nos indican y subiéndolo como *package:*

![Imagen contenedor funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/ghcrPackage.PNG)

Quuedando de la forma:


![Imagen contenedor funciona](https://github.com/LCinder/Order-n-Go/blob/master/docs/img/ghcrEnlazadoGithub.PNG)

