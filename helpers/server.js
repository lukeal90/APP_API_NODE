const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/database');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.usersPath = '/api/user';
    this.authPath = '/api/auth';
  
    // Conecta a la base de datos
    this.connectDb();
    // levanta middlewares
    this.middlewares();
    // levanta ruta
    this.routes();
  }

  async connectDb() {
    await dbConnection();
  }

  middlewares() {
     //cors
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersPath, require('../src/routes/api/user'));
    this.app.use(this.authPath, require('../src/routes/api/auth'));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server run in port ${this.PORT}`);
    });
  }
}

module.exports = Server;
