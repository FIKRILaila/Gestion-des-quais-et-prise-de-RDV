const router = require('express').Router();
const UserController = require('../Controllers/User');

router.get('/',(req, res) => {
    res.send('inside the users');
});

router.post('/register',UserController.register);
router.post('/login',UserController.register);

module.exports = router