const express = require('express');

var puerto = 3000;


const app = express();

app.get('/', (req,res)=>{
    res.send("Hola mundo");
});



app.get('/home', (req, res) => {
    // Construir la ruta absoluta del archivo home.html
    let ruta = path.join(__dirname, 'public', 'home.html');

    // Enviar el archivo como respuesta
    res.sendFile(ruta);
});



app.listen(puerto, ()=>{
    console.log(`Escuchando en  http://localhost:${puerto}`);
});
