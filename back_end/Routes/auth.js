const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require('../validation')
const JWT = require("jsonwebtoken");

router.get('/',(req, res) => {
    res.send('inside the users');
});
router.post('/register',(req, res) => {
    
    //Lets validate the user data
    const {err} = registerValidation(req.body);
    if(error) return res.status(400).send(err.details[0].message);

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

    try{
        const savedUser = await user.save();
        res.status(200).send({user : savedUser._id});
    } catch (err) {
        res.status(400).send({ status: "Failed", msg : err});
    }
});


//login 

router.post('/login', async (req, res) => {

    // Lets validate the user data

    const {err} = loginValidation(req.body);
    if(err) return res.status(400).send(error.details[0].message);

    //cheking the user email 

    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("Invalid Email");

    //checking the password 

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Invalid Passwords');
     

    //creating a token for the user 
    const token = JWT.sign({_id : user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token);
});

module.exports = router