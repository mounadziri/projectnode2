const express = require('express');
const router = express.Router();

//use the model voteSchema
const Vote = require("../models/voteSchema");
//use the model userShema
const User = require("../models/userSchema");
//use the model userShema
const Subject = require("../models/subjectSchema");

// *******************creat vote post ajouter au serveur******************************************************
router.post('/votes', async (req, res) => {
    try {
        //tester le vote oui ou non 
        if(req.body.contenue == 'oui' || req.body.contenue == 'non' ){
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
            //jibet l sujet
            var subject = await Subject.findById(req.body.subject);
            console.log(subject.votes);

            //initialisation du tableau vote dans subject
            if (subject.votes == undefined) {
                subject.votes = []
            }

            subject.votes = subject.votes.push(vote.id)

            const newSubject = await Subject.findByIdAndUpdate(subject.id, subject, { new: true });
            console.log(newSubject)
            res.json(vote);

            //**********************/
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
    } 
    else {
        res.json({ message: 'Veuillez saisir oui ou nn' })

    }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }
});



module.exports = router;
