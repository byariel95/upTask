const {Router} = require('express');
const homeController  = require('../controllers/home.controller');

router = Router();



router.get('/',homeController.index);
//router.get('/project',homeController.nosotros);


module.exports = router;