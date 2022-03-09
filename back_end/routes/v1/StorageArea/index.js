const { addStorageArea, getStorageAreaById, getAllStorageAreas, deleteStorageArea, updateStorageArea } = require("../../../controllers/StorageArea");
const router = require("express").Router()
const {verifyToken} = require("../../../middlewares/jwt")



router.post("/addStorageArea", verifyToken,async (req, res) => {
    let data = await addStorageArea(req.body)
    res.json(data)
})

router.get("/getStorageAreaById/:id", verifyToken,async (req, res) => {
    let { id } = req.params
    let data = await getStorageAreaById(id)
    res.json(data)
})

router.get("/getAllStorageAreas", verifyToken,async (req, res) => {
    let data = await getAllStorageAreas()
    res.json(data)
})

router.post("/deleteStorageArea/:id", verifyToken,async (req, res) => {
    let { id } = req.params
    let data = await deleteStorageArea(id)
    res.json(true)
})


router.post("/updateStorageArea", verifyToken,async (req, res) => {
    let data = await updateStorageArea(req.body)
    res.json(true)
})





module.exports = {
    storageAreaRouter: router
}




