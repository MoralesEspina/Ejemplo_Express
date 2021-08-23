const express = require ('express');
const app = express();
const path = require('path');

console.log('Ahora Estamos en Linea :D');
app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'views/Parcial_Constructora.html' ));
});

app.listen(3000)