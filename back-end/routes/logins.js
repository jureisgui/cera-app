const { response } = require("express");
const express = require("express");
const router = express.Router();
// below is where you edit variable names based on your variable/file structure names
const Login = require("../models/login");

// GET (all) Logins route
router.get('/', async (req, res) => {
    const logins = await Login.find();
    res.json(logins)
});

// POST new Login
router.post('/addlogin', async (req, res) => {
    const newLogin = new Login(req.body);
    const savedLogin = await newLogin.save()
    res.json(savedLogin)
});

// GET (single) Login by ID
router.get('/getlogin/:id', async (req, res) => {
    const IDed_Login = await Login.findById({ _id : req.params.id });
    res.json(IDed_Login)
});

// DELETE a Login by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_Login = await Login.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_Login)
});

// UPDATE a Login by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_Login = await Login.findByIdAndUpdate(
        { _id : req.params.id }, 
        { $set: req.body }
    );
    res.json(toUpdate_Login)
});

module.exports = router