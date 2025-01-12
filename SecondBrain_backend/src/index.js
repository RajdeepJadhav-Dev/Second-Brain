const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
mongoose.connect('mongodb+srv://210rajdeep:13132030931@cluster0.izjm5.mongodb.net/SecondBrain').then(console.log("databse connected"));
const authrouter = require('../routes/authorization');
const crudRouter = require('../routes/CRUD');
app.use(cors());
app.use('/',authrouter);
app.use('/',crudRouter);




app.listen(3000,()=>console.log('port 3000 running....'));