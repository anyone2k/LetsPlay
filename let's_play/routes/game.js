const express = require('express');
const {
    putGameLost,
    putGameWin
}=require('../controllers/game');

const { protect } = require('../middleware/auth');

const router = express.Router();

router
    .route('/win')
    .put(protect,putGameWin);

router
    .route('/lost')
    .put(protect,putGameLost);

module.exports = router;