const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/author')

const path = require('path')
const { Schema } = mongoose;


const nameSchema = new Schema ({
    name: { type: String },
    //default: ''
},{timestamps: true})





const model = mongoose.model('Author', nameSchema)

module.exports = model;

