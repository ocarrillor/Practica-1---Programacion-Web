let express = require('express');
//inyeccion de la dependencia de express
let app = express();
//incluimos el router que viene de persons
let personsRoute = require('./routes/person');

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('escuchando en el puerto 3000')
});