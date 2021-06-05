const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

const dbConnection = async () => {

    try {
        mongoose.connect(MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Database is connected')

    } catch (error) {
        throw new Error('Error al levantar la base de datos');
    }
}

module.exports = {
    dbConnection
}
