const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    timeStamp: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('task', taskSchema);