const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const routerTasks = require('./routes/tasks');
require('dotenv').config();


connection();

app.use(express.json());
app.use(cors());

app.use('/api/tasks', routerTasks);



const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));