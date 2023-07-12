const express = require('express');
const {
    postLogin, 
    postRegister
} = require('../controllers/auth');

const router = express.Router();
    
router
    .route('/login')
    .post(postLogin);

router
    .route('/register')
    .post(postRegister);


module.exports = router;