const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser());
const GetSchema = require('../models/model.js');

// Only exists to add product objects to DB, does not effect user input
router.post('/filldata', async (req, res) => {
    const post = new GetSchema({
        State: req.body.state,
        Products: req.body.objArr
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({message: err});
    }
});

router.get('/getProducts', async (req, res) => {
    const curr = await GetSchema.findOne({State: req.query.state});
    res.json(curr.Products);
})

module.exports = router;