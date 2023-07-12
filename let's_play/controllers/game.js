const Users = require('../models/User');
// @desc  Update wins
// @route   PUT /game/wins
// @access  user based
exports.putGameWins = (req, res) => {
    const id = req.id;
    Users.incrementScoreById(id);
    return res
            .status(200)
            .send('Point added to the User.');
}

// @desc  Update loses
// @route   PUT /game/lost
// @access  user based
exports.putGameLost = (req, res) => {
    const id = req.id;
    Users.decrementScoreById(id);
    return res
            .status(200)
            .send('Point deducted from to the User.');
}