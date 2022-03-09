const {userModel} = require('../../models');
const bcrypt = require('bcryptjs');
const { generateToken } = require("../../middlewares/jwt");

const login = async (req, res) => {

    //cheking the user email 
    const user = await userModel.findOne({email: req.body.email});
    if(!user) return res.status(400).send("Invalid Email");

    //checking the password 

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Invalid Passwords');
     

    //creating a token for the user 
    const {_id , name, email} = user;
    const token = generateToken({ _id, email, name }, process.env.TOKEN_SECRET, user.role)
    // const token = JWT.sign({_id : user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);
}

const register = async (req,res) => {
    // checking the user email already exist or not
    const emailExist = await userModel.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email already exists");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new userModel({
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