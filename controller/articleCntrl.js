const articleModel = require('../models/article');//todomodel
const authorModel = require('../models/author');//todomodel
//console.log(articleModel)


const create = async (data) => {
    articleModel.create(data)
}

const findArticle = async(data) => {
    return await articleModel.find({});
};

//const getList = async () => {
  //  const titles = await articleModel.find({})
  //  .populate('author')
   // .exec()
   // return titles
//}


const getList = async () => {
    const result = articleModel.getList()
    return result;
}





const remove = async (id) => {
    await articleModel.deleteOne({ _id: id })
}

const update = async (id) => {
    await articleModel.updateOne({ _id: id })
}


module.exports = {
    findArticle,
    create, 
    remove,
    update,
    getList
}