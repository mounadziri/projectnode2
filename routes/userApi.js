const express = require('express');
const router = express.Router();

//use the model
const User =  require ("../models/userSchema");

// get all users : get bch nrécupéri ml serveur
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}).populate("todos", "title");
        res.json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});


// ***** get to do by id*******************************
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// *******************creat user post ajouter au serveur******************************************************
router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// ***************************update user put modifier du seveur**************************************
router.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user)  ;
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});

// *******************delete user : effacer du serveur****************************************
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.json({ messasage: "user has been deleted successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }

});
//affect user to user bch nzid haja lel tableau
router.put('/affect-subject/:iduser/:iduser', async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.iduser, {$push:{subjects: req.params.idsubject}}, 
            { new: true });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }
});

//desafect user from user bch nahi haja ml tableau
router.delete('/desaffect-subject/:iduser/:idsubject', async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.iduser,{$pull:{subjects: req.params.idsubject}}, { new: true });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })
    }
    
})

module.exports = router;
