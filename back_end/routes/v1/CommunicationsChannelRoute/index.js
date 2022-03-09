const { addCommunicationsChannel, getCommunicationsChannelById, getAllCommunicationsChannels, deleteCommunicationsChannel, updateCommunicationsChannel } = require("../../../controllers/CommunicationChannel")

const router = require("express").Router()

const {verifyToken} = require("../../../middlewares/jwt")



router.post("/addCommunicationsChannel", verifyToken, async (req, res) => {
    let data = await addCommunicationsChannel(req.body)
    res.json(data)
})

router.get("/getCommunicationsChannelById/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await getCommunicationsChannelById(id)
    res.json(data)
})

router.get("/getAllCommunicationsChannels", verifyToken, async (req, res) => {
    let data = await getAllCommunicationsChannels()
    res.json(data)
})

router.post("/deleteCommunicationsChannel/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await deleteCommunicationsChannel(id)
    res.json(true)
})


router.post("/updateCommunicationsChannel", verifyToken, async (req, res) => {
    let data = await updateCommunicationsChannel(req.body)
    res.json(true)
})




module.exports = {
    CommunicationsChannelRouter: router
}




