const express = require('express');
require('dotenv').config();

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.usersPath = '/api/user';
    this.routes();
    this.middlewares();
  }

  middlewares() {
    // Lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/api/user'));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Servidor corriendo en puerto ${this.PORT}`);
    });
  }
}

module.exports = Server;
