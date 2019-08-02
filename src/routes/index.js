const {Router} = require('express');
router = Router();

router.get('/',(req,res)=>{
    res.send('home');
});

router.get('/nosotros',(req,res)=>{
    res.send('nostros');
});


module.exports = router;