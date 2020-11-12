import express from 'express';
const router = express.Router();
/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/beef', (req, res) =>{
  res.send("Beef")
})

router.get('/chicken', (req, res) =>{
  res.send("Chicken")
})

router.get('/lamb', (req, res) =>{
  res.send("Lamb")
})

export default router;