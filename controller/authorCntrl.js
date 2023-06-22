const authorModel = require('../models/author');



const getList = async () => {

}

const findAuthor = async(data) => {
    const finddaAthor =  await authorModel.find({});
    return finddaAthor
};

const add = async (data) => {
     await authorModel.create(data);
}

const remove = async (id) => {
    await authorModel.deleteOne({ _id: id })
}

const update = async (id) => {
    await authorModel.updateOne({ _id: id })
}


module.exports = {
    add, 
    remove,
    update,
    findAuthor,
    getList
}
