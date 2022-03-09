const { addShip, getShipById, getAllShips, deleteShip, updateShip } = require("../../../controllers/Ship")
const router = require("express").Router()
const {verifyToken} = require("../../../middlewares/jwt")




router.post("/addShip", verifyToken,async (req, res) => {
    let data = await addShip(req.body)
    res.json(data)
})

router.get("/getShipById/:id", verifyToken,async (req, res) => {
    let { id } = req.params
    let data = await getShipById(id)
    res.json(data)
})

router.get("/getAllShips", verifyToken,async (req, res) => {
    let data = await getAllShips()
    res.json(data)
})

router.post("/deleteShip/:id", verifyToken,async (req, res) => {
    let { id } = req.params
    let data = await deleteShip(id)
    res.json(true)
})


router.post("/updateShip", verifyToken,async (req, res) => {
    let data = await updateShip(req.body)
    res.json(true)
})





module.exports = {
    ShipRouter: router
}




