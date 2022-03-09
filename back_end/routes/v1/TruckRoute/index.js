const { addTruck, getTruckById, getAllTrucks, deleteTruck, updateTruck } = require("../../../controllers/Truck")
const router = require("express").Router()

const {verifyToken} = require("../../../middlewares/jwt")



router.post("/addTruck", verifyToken,async (req, res) => {
    let data = await addTruck(req.body)
    res.json(data)
})

router.get("/getTruckById/:id", verifyToken,async (req, res) => {
    let { id } = req.params
    let data = await getTruckById(id)
    res.json(data)
})

router.get("/getAllTrucks", verifyToken,async (req, res) => {
    let data = await getAllTrucks()
    res.json(data)
})

router.post("/deleteTruck/:id", verifyToken,async (req, res) => {
    let { id } = req.params
    let data = await deleteTruck(id)
    res.json(true)
})


router.post("/updateTruck", verifyToken,async (req, res) => {
    let data = await updateTruck(req.body)
    res.json(true)
})





module.exports = {
    TruckRouter: router
}




