const { addQuay, getQuayById, getAllQuays, deleteQuay, updateQuay } = require("../../../controllers/Quay")
const router = require("express").Router()

const {verifyToken} = require("../../../middlewares/jwt")



router.post("/addQuay", verifyToken, async (req, res) => {
    let data = await addQuay(req.body)
    res.json(data)
})

router.get("/getQuayById/:id",verifyToken,  async (req, res) => {
    let { id } = req.params
    let data = await getQuayById(id)
    res.json(data)
})

router.get("/getAllQuays", verifyToken, async (req, res) => {
    let data = await getAllQuays()
    res.json(data)
})

router.post("/deleteQuay/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await deleteQuay(id)
    res.json(true)
})


router.post("/updateQuay", verifyToken, async (req, res) => {
    let data = await updateQuay(req.body)
    res.json(true)
})





module.exports = {
    QuayRouter: router
}




