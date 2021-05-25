//import "./helpers/database.js";
require('dotenv').config();
const Server = require('./src/models/server.js');

const server = new Server();
server.listen();
