require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/usuario'));



mongoose.connect(process.env.URLDB,{ useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true},(err,resp)=>{

if( err ) throw err;

console.log('Base de datos ONLINE');

});


app.listen(process.env.PORT,() => {
    console.log('Escuchando puerto',3000);
});