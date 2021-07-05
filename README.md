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
  * Añadir amigo.
  * Borrar amigo.
  * Obtener reseña de tus amigos.
  * Búsqueda de películas (por nombre, categoría, director).
  * Añadir Película a “Pendientes por ver”.
  * Quitar Película de “Pendientes por ver”.
  * Obtener todas las películas de “Pendientes por ver”.
  * Busqueda de un usuario por el nombre.
  
## Actores:
  * Usuario
  
## Entidades principales: 
  * User
  * Review

## Instrucciones:

  La API esta subida a Heroku, se utilizará la siguiente url.
```
  https://restserver-atlas.herokuapp.com/
```  
Podrás utilizar los siguientes endopints disponibles a continuación:

## Listado de los endpoints:

* /api/review
              
    * (put) Agregar review           ```/api/review/``` 
    * (post) Actualizar review       ```/api/review/:id```
    * (delete) Borrar review         ```/api/review/:id```
    * (get) Obtener últimas 5 review ```/api/review/lastmovie/:idPelicula```
    * (get) Obtener review de usuario```/api/review/:idUser```
    * (get) Obtener review de tus amigos```/api/review/getFriendsReviews/:idUser```
  
* /api/auth/
    * (post) Login del user          ```/api/auth/login```
  
* /api/users
    * (put) Agregar usuario          ```/api/users/```
    * (delete) Eliminar usuario      ```/api/users/:id```
    * (put) Agregar amigos           ```/api/users/friends/addfriend/```
    * (delete) Eliminar amigo        ```/api/users/friends/deletefriend/```
    * (get) Obtener todos los amigos ```/api/users/friends/getfriends/:id```
    * (get) Busca un usuario por nombre ```/api/users/friends/searchuserbyname/:name```
    * (put) Agregar pelicula a lista deseados```/api/users/movies/addmovie```
    * (delete) Elimina una pelicula de la lista```/api/users/movies/deletemovie/```
    * (get) Devuleve todas las peliculas de la lista```/api/users/movies/getmovies/:id```
