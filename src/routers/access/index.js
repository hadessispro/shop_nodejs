const express = require('express');
const router = express.Router();
const accessController =  require('../../controllers/accessController')
//signup

router.post('/shop/signup',accessController.signup);



module.exports  = router