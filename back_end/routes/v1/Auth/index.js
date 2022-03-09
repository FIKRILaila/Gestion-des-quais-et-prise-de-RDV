const router = require("express").Router()
const { register,login } = require("../../../controllers/User")


router.post("/login",login)
router.post("/register",register)

module.exports = {
    authRouter: router
}




