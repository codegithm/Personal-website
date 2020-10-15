const express = require("express");
const route = express.Router();

const CreateMessage = require("../models/create-messge.model");

route.post("/createmessage", (req,res)=>{

    const username = req.body.username;
    const message  = req.body.message;


    const createMessage = new CreateMessage({username,message});

    console.log(req.body)

    createMessage.save()
                .then(()=>{
                    res.status(200).json("Message Created")
                }) 
                .catch(err=>{
                    console.log(err.message)
                    res.status(400).json({mssg : err})
                })                                         
})

route.get("/messages", (req,res)=>{
    CreateMessage.find()
                .then(message =>{
                    res.status(200).json(message)
                })
                .catch(err=>{
                    res.status(400).json({mssg : err})
                })
})

route.delete("/:id", (req,res)=>{
    CreateMessage.findByIdAndDelete(req.params.id)
                .then(()=>{
                    res.status(200).json("Message Deleted")
                })
                .catch(err=>{
                    res.status(400).json({mssg : err})
                })
})

module.exports = route;