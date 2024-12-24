import express from "express";

const router = express.Router()

//all blogs
router.get('/', (req, res) => {
    res.send("Welcome")
    res.status(201).json(user)
})

export default router