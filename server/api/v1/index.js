const express = require('express');
const router = express.Router();
const Question = require('../models/questions');

router.get('/ping', (req, res) =>{
    res.status(200).json({msg: 'pong', date: new Date()});
});

router.get(`/get-list`, (req, res) => {
    Question.find().sort({ 'createOn': -1 })
    .exec()
    .then(questions => res.status(200).json(questions))
    .catch(err => res.status(500).json({
        message: 'Questions introuvables :p',
        error : err
    }));    
});

router.post('/questions', (req, res) => {
    console.log('req.body', req.body);
    const question = new Question(req.body);
    question.save((err, question) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(question);
    });
});

router.get('/questions/:id', (req,res)=> {
    const id = req.params.id;
    Question.findById(id)
    .then(question => res.status(200).json(question))
    .catch(err => res.status(500).json({
        message: `question with id ${id} not found`,
        error: err
    }));
});

router.delete('/questions/:id', (req, res) => {
    console.log(req);
    const id = req.params.id;
    Question.findByIdAndDelete(id, (err, question) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(202).json({ msg: `question with id ${question._id} deleted`})
    })
})

router.put('/questions/:id', (req, res) =>{
    const id = req.params.id;
    const questionField = {
        question: req.body.question,
        theme: req.body.theme
    };
    Question.findOneAndUpdate({ _id: id }, { $set: questionField}, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router;