const express = require('express');
const router = express.Router();
const Task = require('../models/Tasks');

router.post('/create', async (req, res) => {
    try {
        const newTask = await new Task( req.body ).save();
        
        res.json(newTask);
    } catch (error) {
        res.send( error.message);
    }
})

router.get('/show', async (req, res) => {
    try {
        const tasks = await Task.find({});
     
        res.json(tasks);
    } catch (error) {
        res.send(error.message);
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({_id: req.params.id},  req.body);
        res.json(task);
    } catch (error) {
        res.send(error.message);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const task = await Task.deleteOne({_id: req.params.id});
        res.json(task);
    } catch (error) {
        res.send(error.message);        
    }
})

module.exports = router;