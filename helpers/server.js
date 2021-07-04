const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { dbConnection } = require('../database/database');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.usersPath = '/api/user';
    this.authPath = '/api/auth';
    this.reviewPath = '/api/review';
  
    this.connectDb();
    this.middlewares();
    this.routes();
  }

  async connectDb() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersPath, require('../src/routes/api/user'));
    this.app.use(this.authPath, require('../src/routes/api/auth'));
    this.app.use(this.reviewPath, require('../src/routes/api/review'));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server run in port ${this.PORT}`);
    });
  }
}

module.exports = Server;
