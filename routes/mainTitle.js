const path = require('path');
const express = require('express');

const router = express.Router();

const articleCntrl = require('../controller/articleCntrl');
const authorCntrl = require('../controller/authorCntrl');



const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);
//рендеримо нашу сторінку
router.get('/add-title', (req, res) => {
  res.render(createPath('pageTitle'));
});


//передаєм список статей в бд
router.post('/add-article', (req, res) => {
  console.log(req.body);
  articleCntrl.create(req.body)
})




module.exports = router;