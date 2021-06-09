# API MOVIE

## Descripción:

Aplicación con formato “red social” orientada a la crítica del cine y compartir opiniones sobre películas.
Donde un usuario puede compartir reviews, agregar amigos, ver películas recomendadas, agregarlas a una lista de “deseados” y crear reseñas de crítica con un puntaje.

## Casos de uso: 
  * Creación de usuario (alta y baja).
  * Inicio de sesión en la aplicación.
  * Creación de una reseña/análisis permitiendo darle un puntaje y una crítica.
  * Modificación de la reseña.
  * Borrado de la reseña.
  * Búsqueda de amigos.
  * Búsqueda de un amigo.
  * Añadir amigo.
  * Borrar amigo.
  * Búsqueda de películas (por nombre, categoría, director).
  * Añadir Película a “Pendientes por ver”.
  * Quitar Película de “Pendientes por ver”.
  
## Actores:
  * Usuario
  
## Entidades principales: 
  * User
  * Review
  * Pelicula

## Instrucciones:
```
  npm install
```
```
  npm start
```
  
## Listado de los endpoints:

* /api/review
              
    * (put) Agregar review           ```/api/review/``` 
    * (post) Actualizar review       ```/api/review/:id```
    * (delete) Borrar review         ```/api/review/:id```
    * (get) Obtener pelicula         ```/api/review/lastmovie/:idPelicula```
    * (get) Obtener usuario          ```/api/review/:idUser```
  
* /api/auth/
    * (post) Login del user          ```/api/auth/login```
  
* /api/users
    * (put) Agregar usuario          ```/api/users/```
    * (delete) Eliminar usuario      ```/api/users/:id```
    * (post) Agregar amigos          ```/api/users/friends/addfriend```
    * (delete) Eliminar amigo        ```/api/users/friends/deletefriend/:id```
    * (get) Obtener amigo            ```/api/users/friends/getfriend/:id```
    * (get) Obtener todos los amigos ```/api/users//friends/getfriends```
