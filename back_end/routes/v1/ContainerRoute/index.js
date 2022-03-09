const { addContainer, getContainerById, getAllContainers, deleteContainer, updateContainer } = require("../../../controllers/Container")
const router = require("express").Router()

const {verifyToken} = require("../../../middlewares/jwt")



router.post("/addContainer", verifyToken, async (req, res) => {
    let data = await addContainer(req.body)
    res.json(data)
})

router.get("/getContainerById/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await getContainerById(id)
    res.json(data)
})

router.get("/getAllContainers", verifyToken, async (req, res) => {
    let data = await getAllContainers()
    res.json(data)
})

router.post("/deleteContainer/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await deleteContainer(id)
    res.json(true)
})


router.post("/updateContainer", verifyToken, async (req, res) => {
    let data = await updateContainer(req.body)
    res.json(true)
})





module.exports = {
    ContainerRouter: router
}




