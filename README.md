## Bolierplate para API en NodeJS usando Express

Este repositorio tiene como finalidad brindar al desarrollador una estructura base ya configurada para que pueda abordar un nuevo proyecto y evitar los primeros pasos de la creación de un proyecto que tienden a ser repetitivos.

### Estructura del proyecto

```
project
│   README.md
│   .editorconfig
│   .env.development
│   .env.production
│   .env.staging
│   .env.test
│   .eslintrc
│   .gitignore
│   .package.json
│   .README.md
│
└───src
│   │   app.js
│   │   index.js
│   │
│   └───config
│   │   │   config.js
│   │
│   └───controllers
│   │
│   └───models
│   │
│   └───routes
│   │
│   └───templates
│   │
│   └───test
│   │
│   └───utils
│   │   │
│   │   └───helpers
│   │   │   app.js
│   │   │
```

Esta estructura cuenta con diferentes carpetas, cada carpeta tiene una función en específica.

- **Project:** Esta es la carpeta raíz, la cual contiene todo el proyecto. En su primer nivel esta todas las configuraciones básicas para escribir código.
- **Src:** Es la carpeta de recursos del proyecto, esta carpeta contiene todo lo que es código que usara el proyecto.
- **Config:** En esta carpeta se guarda todas las configuraciones que hay en el proyecto, tanto como para el proyecto mismo, como para las librerías de terceros.
- **Controllers:** En esta carpeta se guarda los archivos que realizan la lógica del API que se usaran en los diferentes endpoints.
- **Models:** En caso de usar un ORM y necesites modelar tu base de datos, se usara esta carpeta para guardar todos los modelos.
- **Routes:** Aquí se guardaran todas las rutas que se generan a través de la librería Express.
- **templates:** En el caso de que se necesite algún template en código HTML o otro, este seria el lugar donde deba ir.
- **Test:** Aquí irán todas las pruebas que se creen para las diferentes URIs del API.
- **Utils:** Aquí se guardan las funciones propias que serán de ayuda para resolver los problemas propuestos, o para simplificar el uso de métodos de terceros.

### Instalación y configuración básica

Para usar este repositorio se debe seguir los siguientes pasos:

#### Clonar el repositorio
```console
git clone <rama> https://gitlab.com/doapps-software/api-boilerplate.git <nombre_proyecto>
```
Este comando clonara la rama especifica en una carpeta con nombre del proyecto que vas a realizar.
#### Eliminar el git local actual
Es necesario eliminar el git que se creo al clonar y dejar el proyecto "limpio".
```console
rm -rf .git
```
Una vez eliminada el git local, puedes agregarle el repositorio git de tu nuevo proyecto
```console
git remote add origin <repositorio_proyecto_url>
```
#### Quitar los comentarios en el .gitignore
Por motivos del proyecto el **`.gitignore`** viene con una parte comentada, esto se debe para que puedas obtener los archivos para las variables de entorno.
Para que estos archivos que contienen información privada es necesario que estén especificado en el documento **`.gitignore`**.

Quitar los comentarios de las siguientes lineas de esta forma.
```
.gitignore file
-----------------
  ...

  # dotenv environment variables file
  .env
  .env.*

  ...
```
#### Instalar dependencias usando `yarn`
Si es necesario puede agregar las dependencias que desee y luego instalarlas usando **`yarn`**.
```console
yarn install
```
