const express = require('express');
const router = express.Router();

//use the model
const Vote =  require ("../models/voteSchema");

// *******************creat vote post ajouter au serveur******************************************************
router.post('/votes', async (req, res) => {
    try {
        const vote = await Vote.create(req.body);
        res.json(vote);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

module.exports = router;
