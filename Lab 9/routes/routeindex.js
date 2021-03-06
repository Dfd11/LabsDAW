
const express = require('express');
const router = express.Router();
const Post = require('../model/post');


router.get('/', async function(req,res){
  let posts = await Post.find()
  //console.log(posts)
  res.render('index',{posts});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPost', async (req,res) =>{
  let post = new Post(req.body)
  console.log(post)
  await post.save()
  res.redirect("/")
});

router.get('/delete/:id', async (req,res) =>{
  let id = req.params.id
  let post = await Post.findById(id)
  console.log(post)
  res.render("delete",{post})
});

router.post('/delete/:id', async (req,res) =>{
  await Post.remove({_id:req.params.id})
  res.redirect("/")
});

router.get('/edit/:id', async (req,res) =>{
  let id = req.params.id
  let post = await Post.findById(id)
  console.log(post)
  res.render("edit",{post})
});

router.post('/edit/:id', async (req,res) =>{
  await Post.updateOne({_id:req.params.id},req.body)
  res.redirect("/")
});







module.exports = router;