import mongoose from 'mongoose';

const user = 'admin'
const pass = 'adminGLAN'

const MONGODB_URI =`mongodb+srv://${user}:${pass}@cluster0.2cpgy.mongodb.net/atlas?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, 
    {useUnifiedTopology: true, useNewUrlParser: true}
)
    .then(() => console.log('Database is connected'))
    .catch(e => console.log(e))
