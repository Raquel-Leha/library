

const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");


//Creamos el servidor
const app = express();

//Nos conectamos a la base de datos
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/books', require('./routes/book'));
app.use('/api/users', require('./routes/user'));


app.listen(4000, () => {
    console.log("El servidor esta funcionando correctamente.")
});