# Servidor Express

Aqui se encuentran los archivos del servidor Express y la API.

## ⚠ Atencion

Antes de abrir el servidor, **es necesario iniciar la base de datos MongoDB** con el comando `mongod` en una terminal. En caso contrario, el servidor Express no se ejecutará. Por defecto, Express intentará conectarse a la base de datos en `mongodb://0.0.0.0:27017/wasap_db`.

## Instrucciones

1. Abrir una terminal aqui.

2. Ejecutar `npm install` para instalar las dependencias.

3. Para correr el servidor se puede ejecutar `npm start` o `npm run devstart` para correrlo con nodemon.

4. El servidor se ejecutará por defecto en el puerto 4000 (http://localhost:4000).

> Si se desea cambiar el puerto, se debe modificar el archivo `bin/www`.

> Se recomienda revisar la documentacion de la API en la seccion [API Docs](https://github.com/INGESO-2023-1/grupo_10/wiki/API-Docs).

> Para las pruebas se utilizó la extensión de VSCode [Thunder Client](https://www.thunderclient.io/). La coleccion de pruebas se encuentra en el archivo `thunder-collection_Wasap.json`. Tambien se puede utilizar [Postman](https://www.postman.com/).
