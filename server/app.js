const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
require("dotenv").config();


//Routes
const createMessage = require("./routes/create-message");

const port = process.env.PORT || 5000;

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())
app.use('/create', createMessage);

//Connect
const uri = process.env.DB_CONNECT;

mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true } ,(err)=>{
    if(err){
        console.log({mssg : err})
    }else{
        console.log("connected to MongoDB")
    }
} )



app.listen(port, ()=>{
    console.log("Connected to Port 5000")
});