const {Router} = require('express');
router = Router();

const homeController  = require('../controllers/home.controller');

router.get('/',homeController.index);
router.get('/nosotros',homeController.nosotros);


module.exports = router;