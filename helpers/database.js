import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const user = process.env.DATABASE_USERNAME;
const pass = process.env.DATABASE_PASSWORD;

const MONGODB_URI =`mongodb+srv://${user}:${pass}@cluster0.2cpgy.mongodb.net/atlas?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, 
    {useUnifiedTopology: true, useNewUrlParser: true}
)
    .then(() => console.log('Database is connected'))
    .catch(e => console.log(e))
