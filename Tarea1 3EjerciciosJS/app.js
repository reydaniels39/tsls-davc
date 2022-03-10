const express = require('express');
const app = express();
const port = 3000

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

/*app.get('/', (req, resp) => {
    console.log(req.query);
    throw new Error("Aquí hubo un error");
    resp.send("Hola");
})*/


app.post('/user', (req, resp) => {
    const body = req.body;
    resp.send({
        nombre:`Su nombre es ${body.name} y su apellido es ${body.last_name}`,
        edad: `Su edad es ${body.age}`,
        actividad: `Su actividad es ${body.activity}`,
        resumen: `El se llama ${body.name} ${body.last_name} y su edad es ${body.age} y se dedica a ${body.activity}`
    });
})

app.listen(port, () => console.log("Corriendo"));

  
//1ER EJERCICIO DE TAREA
/*app.get('/', (req, resp) => {
    const array = [1,5,4,3,6,2,7,8,9];
    
    array.sort(function(a, b) {
        return a - b;
    });

    console.log(array)
    resp.send("Ejercicio de tarea 1");
})*/

//2DO EJERCICIO DE TAREA
/*app.get('/', (req, resp) => {
    const helados = ['crema del cielo', 'granizado', 'chocolate', 'dulce de leche', 'frutillas', 'banana split', 'almendrado', 'amarena', 'crema con frutillas', 'chocolate nevado'];
    
    for (let i = 0; i < helados.length; i++) {
        console.log('- ' + helados[i])
    }

    resp.send("Ejercicio de tarea 1");
})*/

//3ER EJERCICIO DE TAREA
app.get('/', (req, resp) => {
    const array = [1,5,4,3,6,2,7,8,9];
    let resultado = array[0]
    
    for (let i = 0; i < array.length; i++) {
        resultado = resultado*array[i]
    }

    console.log(resultado)
    resp.send("Ejercicio de tarea 1");
})