const router = require("express").Router();
const verify = require("../Routes/verifyToken");

router.get('/',verify, (req, res) => {
    res.json({
        post: {
            title: "My First Post",
            description: "something inside here",
        },
    });
});

module.exports = router;