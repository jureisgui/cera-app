const { response } = require("express");
const express = require("express");
const router = express.Router();
// below is where you edit variable names based on your variable/file structure names
const Answer = require("../models/answer");

// GET (all) Answers route
router.get('/', async (req, res) => {
    const answers = await Answer.find();
    res.json(answers)
});

// POST new Answer
router.post('/addanswer', async (req, res) => {
    const newAnswer = new Answer(req.body);
    const savedAnswer = await newAnswer.save()
    res.json(savedAnswer)
});

// GET (single) Answer by ID
router.get('/getanswer/:id', async (req, res) => {
    const IDed_Answer = await Answer.findById({ _id : req.params.id });
    res.json(IDed_Answer)
});

// DELETE a Answer by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_Answer = await Answer.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_Answer)
});

// UPDATE a Answer by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_Answer = await Answer.findByIdAndUpdate(
        { _id : req.params.id }, 
        { $set: req.body }
    );
    res.json(toUpdate_Answer)
});

module.exports = router