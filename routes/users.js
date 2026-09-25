const express = require("express")
const router = express.Router()

const data = [
    {
        "id": 1,
        "name":"joe",
        "age": 30
    },{
        "id":2,
        "name":"jake",
        "age": 25
    }
]

router.get("/", (req, res) => {
    res.json({
        "data" : data
    })
})

router.get("/:id", (req, res) => {
    let id = req.params.id 
    const response = data.filter(a => a.id == id)
    res.json({
        "res" : response
    })
})

module.exports = router