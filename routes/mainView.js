const path = require('path');
const express = require('express');
const articleCntrl = require('../controller/articleCntrl')



const router = express.Router();

//рендеримо нашу сторінку
const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);
router.get('/veiw', (req, res) => {
  res.render(createPath('pageView'))
})

router.post('/view', async (req, res) => {
  const data = await articleCntrl.getList()
  console.log('data:', data);
  res.json(data)
})



module.exports = router;