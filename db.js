const mongoose = require('mongoose');
require('dotenv').config();



module.exports = () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('database connected'))
        .catch(error => console.log('Could not connect ', error.message))
}