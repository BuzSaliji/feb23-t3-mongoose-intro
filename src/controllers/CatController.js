const express = require('express');
const { Cat } = require('../models/CatModel');
const router = express.Router();

router.get("/all", async (required, response) => {
    // empty object in .find( means get all documents)
    let result = await Cat.find({});

    response.json({
        cats: result
    });
});

module.exports = router;