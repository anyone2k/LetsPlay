const Users = require('../models/User');

// @desc  read users
// @route   get /users
// @access  public
exports.getUsers = (req, res) => {
    const users = Users.findExceptAdmin();
      res.status(200).send(users);

}

// @desc  Update user 
// @route   PUT /users/:id
// @access  private (Admin only)
exports.putUserbyId = (req, res, next) => {
    const { id, username, email } = req.body;
    const user = Users.findById(id);
    if(user === null){
      return res.status(404).send('User Does not exist.');
    }
    if(Users.findByEmail(email) !== null ){
      return res.status(409).send('Email is used by another User!');
    }
    
    data = {
      'id': id,
      'username': username,
      'email': email,
      'password': user.password,
      'isAdmin': false,
      'score': user.score,
    }
    const mod =  Users.updateById(id,data);

    return res.status(200).send("User Modified");

}
// @desc  detele user 
// @route   DELETE /users/:id
// @access  private
exports.deleteUserbyId = (req, res, next) => {
  const { id } = req.body;
  const user = Users.findById(id);
  if(user === null){
    return res.status(404).send('Specified User does not exist!');
  }
  Users.deleteById(id);
  return res.status(204).send("No Content :3");

    
}