const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require ('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8081;

const ure = process.env.ATLAS;
mongoose.connect(ure,{useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connected successfully")
})

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}));

const moneyRouter = require ('./routes/money.routes');

app.use('/economy', moneyRouter);

app.get('/'  , (req,res)=> {
    res.json({message:"welcome to it world"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
