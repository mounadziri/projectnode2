const express = require('express');
const router = express.Router();

//use the model voteSchema
const Vote = require("../models/voteSchema");
//use the model userShema
const User = require("../models/userSchema");
//use the model sujet
const Subject = require("../models/subjectSchema");

// get all  : get bch nrécupéri ml serveur

router.get('/percentage', async (req, res) => {

    try {

        const subjects = await Subject.find({}).populate('votes');
        percentages = []
        subjects.forEach(subject => {
            if (subject.votes != undefined) {
                nbrTotale = subject.votes.length;
                nbrOui = subject.votes.filter(element => element.contenue == 'oui').length
                nbrNon = subject.votes.filter(element => element.contenue == 'non').length
                pourcentageOui = (nbrOui * 100) / nbrTotale;
                pourcentageNon = (nbrNon * 100) / nbrTotale;
                percentages.push({ subject, pourcentageOui, pourcentageNon })
            }

        })


        res.json(percentages)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

module.exports = router;
