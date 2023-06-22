const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/author')
const { find } = require('./author');
const path = require('path')
const { Schema } = mongoose;


const articleSchema = new Schema ({
        author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Author'
        },
        title: { type: String },
        //default: '',
        text: { type: String },
        //default: '',
},{timestamps: true});

const model = mongoose.model('Article', articleSchema)

const create = (data) => {
    model.create(data)
}
    const getList = async () => {
       const titles = await model
        .find()
        .populate('author')
        return titles;
} 





module.exports = {
        model, 
        create,
        getList
}


