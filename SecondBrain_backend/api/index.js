const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
MongoDB_URL = process.env.MongoDB_URL
mongoose.connect(MongoDB_URL).then(console.log("databse connected"));
const authrouter = require('./authorization.js');
const crudRouter = require('./CRUD.js');
const { preprocess } = require('zod');
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://second-brain-frontend-drab.vercel.app', // Replace with your Vercel frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify HTTP methods allowed
    credentials: true, // Allow cookies if needed
  }));
app.use('/',authrouter);
app.use('/',crudRouter);

module.exports = (req, res) => {
  app(req, res);
};