const { addDriver, getDriverById, getAllDrivers, deleteDriver, updateDriver } = require("../../../controllers/Driver")
const router = require("express").Router()
const {verifyToken} = require("../../../middlewares/jwt")


router.post("/addDriver", verifyToken, async (req, res) => {
    let data = await addDriver(req.body)
    res.json(data)
})

router.get("/getDriverById/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await getDriverById(id)
    res.json(data)
})

router.get("/getAllDrivers", verifyToken, async (req, res) => {
    let data = await getAllDrivers()
    res.json(data)
})

router.post("/deleteDriver/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await deleteDriver(id)
    res.json(true)
})


router.post("/updateDriver", verifyToken, async (req, res) => {
    let data = await updateDriver(req.body)
    res.json(true)
})





module.exports = {
    DriverRouter: router
}




