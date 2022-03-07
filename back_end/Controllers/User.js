const {User} = require('../Models/User');
const bcrypt = require('bcryptjs');
const JWT = require("jsonwebtoken");



const login = async (req, res) => {

    //cheking the user email 

    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("Invalid Email");

    //checking the password 

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Invalid Passwords');
     

    //creating a token for the user 
    const token = JWT.sign({_id : user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);
}

const register = async (req,res) => {
    // checking the user email already exist or not
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email already exists");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    });
   try {
       await user.save();
    //    res.status(200).json(user);
       res.status(200).send({user : user});
    //    res.status(200).send({user : savedUser._id});

   } catch (error) {
       res.status(400).send({ status: "Failed", msg : err});
   }
}

module.exports = {
    login,
    register
}