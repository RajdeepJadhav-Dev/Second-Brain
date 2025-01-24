const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
MongoDB_URL = process.env.MongoDB_URL
mongoose.connect(MongoDB_URL).then(console.log("databse connected"));
const authrouter = require('../routes/authorization');
const crudRouter = require('../routes/CRUD');
const { preprocess } = require('zod');
const port = 3000;
app.use(cors());
app.use('/',authrouter);
app.use('/',crudRouter);




app.listen(port,()=>console.log('port 3000 running....'));