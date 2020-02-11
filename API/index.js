const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
// server
const app = express();

// cors habilitacion
const whitelist = ['http://localhost:3000'];
const corsOptions = { origin: (origin, callback ) => {
     const existe = whitelist.some( dominio => dominio === origin);
     if(existe ){
          callback(null, true)
     }else{
          callback(new Error('Access Denied by CORS'))
     }
}}
 // app.use(cors(corsOptions));
 app.use(cors(corsOptions));

// conexion Mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://ael:ael@pacientes-jz5vf.mongodb.net/pacientes',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
})
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routing
app.use('/', routes());

app.listen(4000, () => {
     console.log('Server Online')
})