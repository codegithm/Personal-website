const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    username : {
        type: String, 
        required: true,
        trim: true, 
        minlength: 2},

    message :  { 
        type: String, 
        required: true,
        trim: true, 
        minlength: 5},
},{
    timestamps: true
});

const CreateMessage = mongoose.model('CreateMessage', messageSchema);

module.exports = CreateMessage;