const express = require("express");
const  app = express();
require('dotenv').config()

//middlewar
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

//Import router
const weatherRoute = require('./routes/weather');

//view engine
app.set('view engine', 'ejs')

//miidleware route
app.use('/', weatherRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server starting at port ${PORT}`));