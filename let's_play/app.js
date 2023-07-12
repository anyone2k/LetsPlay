// CRUD students
// C. Create   POST   
// R. Read     GET     
// U. Update   PUT     
// D. Delete   DELETE  

//===============================================================\\

const express = require('express');
const dotenv = require("dotenv");
const colors = require('colors');
// const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

const routesgame = require('./routes/game');
const routesauth = require('./routes/auth');
const routesme = require('./routes/me');
const routesusers = require('./routes/users');

app.use(express.json());
app.use('/auth', routesauth);
app.use('/users', routesusers);
app.use('/game', routesgame);
app.use('/me', routesme);



const server = app.listen(PORT, () => {
    console.log(`Server listen on port : ${PORT} and devmode: ${process.env.NODE_ENV}`.yellow.bold);
});

