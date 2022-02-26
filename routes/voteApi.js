const express = require('express');
const router = express.Router();

//use the model
const Vote = require("../models/voteSchema");
//use the model
const User = require("../models/userSchema");

// *******************creat vote post ajouter au serveur******************************************************
router.post('/votes', async (req, res) => {
    try {
        //jibet l user
        var user = await User.findById(req.body.user);
        console.log(user.votes);
        //current timestamp
        const start = Date.now();
        const ends = start - 86400000; //-24h
        //parccourir le tableau de vote
        nbr = 0;
        for (var voteid of user.votes) {
            const vote = await Vote.findById(voteid);
            console.log(vote)
            if (vote.date < start && vote.date > ends) {
                nbr++;

            }
        }
        if (nbr < 5) {
            const vote = await Vote.create(req.body);
            console.log(vote.id)
            if (user.votes == undefined) {
                user.votes = []
            }
            user.votes = user.votes.push(vote.id)
            const newUser = await User.findByIdAndUpdate(user.id, user, { new: true });
            console.log(newUser)
            res.json(vote);

        }
        else {
            res.json({ message: 'vous avez dépasser 5 vote' })

        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }
});



module.exports = router;
