const Users = require('../models/User');

// @desc  read users
// @route   get /users
// @access  public
exports.getUsers = (req, res, next) => {
    res.status(200).json({ success: true, data:{id: 1} });
    res.status(400).json({ bad})
}

// @desc  Update user 
// @route   PUT /users/:id
// @access  private
exports.putUserbyId = (req, res, next) => {
    res.status(200).json({ success: true, data:{id: 1} });
    res.status(400).json({ bad})
}
// @desc  detele user 
// @route   DELETE /users/:id
// @access  private
exports.deleteUserbyId = (req, res, next) => {
    res.status(200).json({ success: true, data:{id: 1} });
    res.status(400).json({ bad})
}