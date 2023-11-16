const usersCtrl = {};
const User = require('../models/User');

usersCtrl.createUser = async (req, res) =>{
    const {nombre, dicMac, email, password} = req.body;
    const newUser = new User({
        nombre: nombre,
        dicMac: dicMac,
        email:email,
        password: password
    })
    await newUser.save();
    res.json({message: 'User registered'});
}

usersCtrl.updateUser = async (req, res) =>{
    const {nombre, dicMac, email, password} = req.body;
    await User.findOneAndUpdate({_id: req.params.id}, {
        nombre, dicMac, email, password
    });
    res.json({message: 'User Updated'});
}

usersCtrl.login = async (req, res) =>{
    const {email, password} = req.body;
    var user = await User.findOne({email: email}).exec();
    if(!user){return res.status(400).send({message: "The username does not exist", goIn: 0});}
    user.comparePassword(password, (error, match)=>{
        if(!match){
            return res.status(400).send({ message: "The password is invalid", goIn: 0 });
        }else{res.send({ message: "The username and password combination is correct!", goIn: 1, usuario:user });}
    });
    
}

module.exports = usersCtrl;