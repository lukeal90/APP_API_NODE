import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
});