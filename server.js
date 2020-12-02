const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app= express();
const port=process.env.PORT||8080; //using port 8080
require('dotenv').config();

app.use(cors()); //to connect client side to server side
app.use(express.json());

const uri=process.env.ATLAS_URI; //connecting MongoDB to our app
//in the .env file, we will connect to the mongoDB Atlas
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const connection=mongoose.connection;
connection.once('open',()=>
 console.log("MongoDB connection estb")); //print on console when it connects

const articlesRouter= require('./routes/articles');
app.use('/articles', articlesRouter);
//this calls the articles.js from route folder and calls eevrythinhg there and that calls the Schema from modules articles.js

app.listen(port,()=> console.log(`App running on Port: ${port} `));