const { addBlock, getBlockById, getAllBlocks, deleteBlock, updateBlock } = require("../../../controllers/Block")
const router = require("express").Router()
const {verifyToken} = require("../../../middlewares/jwt")


router.post("/addBlock", verifyToken, async (req, res) => {
    let data = await addBlock(req.body)
    console.log(data);
    res.json(data)
})

router.get("/getBlockById/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await getBlockById(id)
    res.json(data)
})

router.get("/getAllBlocks", verifyToken, async (req, res) => {
    let data = await getAllBlocks()
    res.json(data)
})

router.post("/deleteBlock/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await deleteBlock(id)
    res.json(true)
})


router.post("/updateBlock", verifyToken, async (req, res) => {
    let data = await updateBlock(req.body)
    res.json(true)
})





module.exports = {
    BlockRouter: router
}




