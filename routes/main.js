const path = require('path');
const express = require('express');

const router = express.Router();
const authorCntrl = require('../controller/authorCntrl');

//рендеримо сторінку
const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);
router.get('/', (req, res) => {
    res.render(createPath('page'));

});
//передаєм список авторів в бд
router.post('/add-author', (req,res) => {
    authorCntrl.add(req.body);
})
//получаєм список авторів з бд
router.get('/authors', async (req,res) => {
    const data = await authorCntrl.findAuthor();
    //console.log(data)
    res.json(data)
})



module.exports = router;