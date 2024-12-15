const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{res.send("Server working great Ben:)")});

module.exports = router 
