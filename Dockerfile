FROM alpine

#creamos un usuario sin pass y le aplicamos todos los permisosn necesarios
# para acceder a la carpeta node_modules e instalamos el gestor de paquetes de node
# npm
RUN adduser -S node && mkdir /node_modules && chown node /node_modules && apk add --update nodejs npm && npm i -g ava

USER node

COPY package.json ./

#Aqui es donde se OPTIMIZA la imagen es decir la imagen se optimiza
#en el mismo momento que se crea instalando las dependencias estrictamente necesarias
#y borrando la cache una vez instaladas
RUN npm install --only=production && npm cache clean --force

USER root

#Borramos los archivos package con permisos de superusuario
RUN rm -rf package*

USER node

ENV PATH=/node_modules/.bin:$PATH

WORKDIR /test

#El tester AVA no puede trabajar sin permisos de superusuario
#por tanto una vez instalamos todo cambiamos al user root
#USER root

CMD ["npm", "test"]

