# Grupo 10

Este es el repositorio del Grupo 10, cuyos integrantes son:

* Maximiliano Sepúlveda

* Sebastián Castro

* Cristopher Fuentes

* Ignacio Araya

**Tutor:** Sebastián Cifuentes

# Cambios

👉 Actualmente trabajando en branch [react-dev](https://github.com/INGESO-2023-1/grupo_10/tree/react-dev).

# Wiki

👉 Se puede acceder a la Wiki mediante el siguiente [enlace](https://github.com/INGESO-2023-1/grupo_10/wiki).

👉 La documentación de la API se encuentra en la seccion [API Docs](https://github.com/INGESO-2023-1/grupo_10/wiki/API-Docs).

# Setting up

Se utilizó [Node.js](https://nodejs.org/en) version 18.16.0.

Para la base de datos se usó [MongoDB](https://www.mongodb.com/try/download/community) version 6.0.6.

La carpeta `server` contiene el servidor Express, mientras que la carpeta `client` contiene el servidor React.

## Express

⚠ Antes de abrir el servidor, **es necesario iniciar la base de datos MongoDB** con el comando `mongod` en una terminal. En caso contrario, el servidor Express no se ejecutará. Por defecto, Express intentará conectarse a la base de datos en `mongodb://0.0.0.0:27017/wasap_db`.

1. Abrir una terminal en la carpeta `server`.

2. Ejecutar `npm install` para instalar las dependencias.

3. Para correr el servidor se puede ejecutar `npm start` o `npm run devstart` para correrlo con nodemon.

4. El servidor se ejecutará por defecto en el puerto 4000 (http://localhost:4000).

> Si se desea cambiar el puerto, se debe modificar el archivo `bin/www`.

> Se recomienda revisar la documentacion de la API en la seccion [API Docs](https://github.com/INGESO-2023-1/grupo_10/wiki/API-Docs).

> Para las pruebas se utilizó la extensión de VSCode [Thunder Client](https://www.thunderclient.io/). La coleccion de pruebas se encuentra en el archivo `thunder-collection_Wasap.json`. Tambien se puede utilizar [Postman](https://www.postman.com/).

## React

Librerias necesarias para frontend

Bootstrap 5:
```
npm install react-bootstrap bootstrap
```
react-router-dom:
```
npm install react-router-dom
```
