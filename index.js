const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// connecte to database
const connect = require('./database/connect');

//**********les configuration **********/
//morgan config
  app.use(morgan('dev'));

//config bodyparser
app.use(express.json());

//************les API*************** */

app.get('/', (req, res) => {
    res.json({messasage :'hello mouna'})
  });

 //todo api
const subjectApi = require ('./routes/subjectsApi');
app.use('/api/v1', subjectApi); 
//user api
const userApi = require ('./routes/userApi');
app.use('/api/v1', userApi)

app.listen(port, () => { 
    console.log(`Application listening at http://localhost:${port}`)
  })


