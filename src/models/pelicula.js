import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pelicuaSchema = new Schema({
     idPelicula: integer,
     titulo: String,
     imagen: String,
     resumen: String,
     director: String,
     genero: [{id: integer, name: String}],
     puntaje: [{puntaje: integer, description: String}]
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

export { Pelicula };