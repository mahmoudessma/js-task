const express = require('express')
const app = express();
const dotenv = require('dotenv');
const Testdata = require('./TestData.json');
const cors= require('cors')
dotenv.config();

app.use(express.json());
app.use(cors());

const words = require('./routes/words.router')
app.use('/words',words)

const rank = require('./routes/rank.router')
app.use('/rank',rank)

app.get('/score' , (req , res)=>{
    // let count=0;
    const score = Testdata.scoresList
    res.json(score)
    
})
app.listen(5000 , ()=>{
    console.log('connect to server' , 5000)
})