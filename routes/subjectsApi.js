const express = require('express');
const router = express.Router();

//use the model
const Subject =  require ("../models/subjectSchema");

// get all todo : get bch nrécupéri ml serveur
router.get('/subjects', async (req, res) => {
    try {
        const subjects = await Subject.find({});
        res.json(subjects)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});


// ***** get subject by id*******************************
router.get('/subjects/:id', async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        res.json(subject)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// *******************creat subject post ajouter au serveur******************************************************
router.post('/subjects', async (req, res) => {
    try {
        const subject = await Subject.create(req.body);
        res.json(subject);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// ***************************update subject put modifier du seveur**************************************
router.put('/subjects/:id', async (req, res) => {
    try {
        const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(subject);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// *******************delete todo : effacer du serveur****************************************
router.delete('/subjects/:id', async (req, res) => {
    try {
        const subject = await Subject.findByIdAndRemove(req.params.id);
        res.json({ messasage: "subject has been deleted successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});



module.exports = router;
