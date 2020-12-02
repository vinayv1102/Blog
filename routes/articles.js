const express=require('express');
const router=express.Router();

const Articles =require('../models/articles'); //getting this from the models schema
//GET ALL ARTICLES from MongoDB
router.get('/', (req,res)=>{
    Articles.find() //Articels is the schema we wrote
    .then(article=>res.json(article)) //promise given, res is from the MongoDB server
    .catch(err =>res.status(400).json("Error:${err}"));
});

//ADD NEW ARTICLES
router.post('/add', (req,res)=>{
    const newArticle=new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });
    newArticle
    .save()
    .then(()=>res.json("New article added"))
    .catch(err=>res.status(400).json(`Error: ${err}`));
});

//REQ FIND ARTICLE BY ID
router.get('/:id',(req,res)=>{
    Articles.findById(req.params.id)
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`Error : ${err}`))
})
//REQ FIND ARTICLE BY ID AND UPDATE
router.put('/update/:id',(req,res)=>{
    Articles.findById(req.params.id)
    .then(article=>{
        article.title=req.body.title;
        article.article=req.body.article;
        article.authorname=req.body.authorname;

        article
        .save()
        .then(()=>res.json("Article Updated boss"))
        .catch(err=>res.status(400).json(`Error : ${err}`))
    })
    .catch(err=>res.status(400).json(`Error : ${err}`))
})

//REQ FIND ARTICLE BY ID AND DELETE
router.delete('/:id', (req,res)=>{
    Articles.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Article deleted D:"))
    .catch(err=>res.status(400).json(`Error : ${err}`))
})
module.exports= router;
