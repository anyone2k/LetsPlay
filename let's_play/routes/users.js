const express = require('express');
const {
    getUsers,
    putUserbyId,
    deleteUserbyId
} = require('../controllers/users');

const { protect, isAdmin } = require('../middleware/auth');

const router = express.Router();

router
    .route('')
    .get(protect,getUsers);
    
router
    .route('/')
    .put(protect, isAdmin, putUserbyId)
    .delete(protect, isAdmin, deleteUserbyId);

module.exports = router;