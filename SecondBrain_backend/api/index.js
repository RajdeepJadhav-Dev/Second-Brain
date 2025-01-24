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
app.use(cors({
    origin: 'https://your-frontend.vercel.app', // Replace with your Vercel frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify HTTP methods allowed
    credentials: true, // Allow cookies if needed
  }));
app.use('/',authrouter);
app.use('/',crudRouter);




app.listen('https://second-brain-backend-eta.vercel.app/',()=>console.log('port 3000 running....'));