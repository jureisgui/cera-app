const { response } = require("express");
const express = require("express");
const router = express.Router();
// below is where you edit variable names based on your variable/file structure names
const Question = require("../models/question");

// GET (all) Questions route
router.get('/', async (req, res) => {
    const questions = await Question.find();
    res.json(questions)
});

// POST new Question
router.post('/addquestion', async (req, res) => {
    const newQuestion = new Question(req.body);
    const savedQuestion = await newQuestion.save()
    res.json(savedQuestion)
});

// GET (single) Question by ID
router.get('/getquestion/:id', async (req, res) => {
    const IDed_Question = await Question.findById({ _id : req.params.id });
    res.json(IDed_Question)
});

// DELETE a Question by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_Question = await Question.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_Question)
});

// UPDATE a Question by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_Question = await Question.findByIdAndUpdate(
        { _id : req.params.id }, 
        { $set: req.body }
    );
    res.json(toUpdate_Question)
});

module.exports = router