const Users = require('../models/User');
const jwt = require('jsonwebtoken');


// @desc  create login  
// @route   post /auth/login
// @access  public
exports.postLogin = (req, res) => {
    const { uemail, upassword } = req.body || {};
    const findbyEmail = Users.findByEmail(uemail);
    if(findbyEmail !== null ){
        if(upassword !== findbyEmail.password){
            return res
            .status(401)
            .send("Email or password incorrect");
        }
        else{
        const token = jwt.sign({'id': findbyEmail.id}, 'Salah123');
        return res
            .status(200)
            .send(token);
        
        }
    }
    
    return res
    .status(400)
    .send("Missing or invalide parameters");
    
}

// @desc  create register  
// @route   post /auth/register
// @access  public
exports.postRegister = (req, res) => {
    const {username,email,password} = req.body;
    const findbyEmail = Users.findByEmail(email);
    var userr = {
        'id': undefined,
        'username': username,
        'email': email,
        'password': password,
        'isAdmin': undefined,
        'score': 0,
    };
    if(username !== "" && email !== "" && password !== ""){
        if(findbyEmail !== null ){
            return res
                .status(409)
                .send("Email addres already used by another user!");
        }
        else{
            const create = Users.create(userr);
            const token = jwt.sign({'id': create.id}, 'Salah123');
            return res
                .status(200)
                .send(token);
        }
    }
    return res
            .status(400)
            .send("Missing or invalide parameters");

}