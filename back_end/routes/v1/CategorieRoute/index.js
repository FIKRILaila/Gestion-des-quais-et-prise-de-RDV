const { addCategorie, getCategorieById, getAllCategories, deleteCategorie, updateCategorie } = require("../../../controllers/Categorie")
const router = require("express").Router()
const {verifyToken} = require("../../../middlewares/jwt")



router.post("/addCategorie", verifyToken, async (req, res) => {
    let data = await addCategorie(req.body)
    res.json(data)
})

router.get("/getCategorieById/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await getCategorieById(id)
    res.json(data)
})

router.get("/getAllCategories", verifyToken, async (req, res) => {
    let data = await getAllCategories()
    res.json(data)
})

router.post("/deleteCategorie/:id", verifyToken, async (req, res) => {
    let { id } = req.params
    let data = await deleteCategorie(id)
    res.json(true)
})


router.post("/updateCategorie", verifyToken, async (req, res) => {
    let data = await updateCategorie(req.body)
    res.json(true)
})





module.exports = {
    CategorieRouter: router
}




