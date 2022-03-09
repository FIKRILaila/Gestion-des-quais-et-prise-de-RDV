const { addType, getTypeById, getAllTypes, deleteType, updateType } = require("../../../controllers/Type")
const router = require("express").Router()
const {verifyToken} = require("../../../middlewares/jwt")


router.post("/addType", verifyToken,async (req, res) => {
    let data = await addType(req.body)
    res.json(data)
})

router.get("/getTypeById/:id", verifyToken,async (req, res) => {
    let { id } = req.params
    let data = await getTypeById(id)
    res.json(data)
})

router.get("/getAllTypes", verifyToken,async (req, res) => {
    let data = await getAllTypes()
    res.json(data)
})

router.post("/deleteType/:id", verifyToken,async (req, res) => {
    let { id } = req.params
    let data = await deleteType(id)
    res.json(true)
})


router.post("/updateType", verifyToken,async (req, res) => {
    let data = await updateType(req.body)
    res.json(true)
})





module.exports = {
    TypeRouter: router
}




