var express = require('express');
var router = express.Router();
const controller = require('./controller');



router.get('/',controller.getUser);
router.post('/',controller.saveUser);
module.exports = router;
// router.post('/',controller.saveUser);
// router.post('/deactivate',controller.deactivateUser);