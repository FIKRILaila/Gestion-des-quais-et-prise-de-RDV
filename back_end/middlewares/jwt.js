const jwt = require('jsonwebtoken')

const generateToken = ({ _id, email, name }, secret, role) => {
    const token = jwt.sign({
        id: _id,
        email,
        role,
        name
    }, secret, {
        expiresIn: '24h'
    })
    return token
}

const verifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("Access-Denied");
    try {
        const verfied = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verfied;
        next();
    }catch(err){
        res.status(400).send("Invalid User");
    }
}


module.exports = {
    generateToken,
    verifyToken
}