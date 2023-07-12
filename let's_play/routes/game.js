const express = require('express');
const {
    putGameLost,
    putGameWins
}=require('../controllers/game');

const { protect } = require('../middleware/auth');

const router = express.Router();

router
    .route('/win')
    .put(protect,putGameWins);

router
    .route('/lost')
    .put(protect,putGameLost);

module.exports = router;