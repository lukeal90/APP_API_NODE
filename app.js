require('dotenv').config();
const Server = require('./helpers/server');

const server = new Server();
server.listen();
