const router=require('express').Router();
const blog = require('../models/blog');
const User = require('../models/User');

var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async (req,res)=>{
    const Blogs=await blog.find({});
    res.send(Blogs);
});

router.get('/:id', async(req,res)=>{
    const Val=req.params.id;

    const Blog=await blog.find({_id:Val});

    if(Blog){
        res.json(Blog)
    }else{
        res.json({MessageEvent:"Not found"});
    }
})

//Lets create new blog
router.post('/',async(req,res)=>{
    try{
        const blog1=await new blog({
            authorname:req.body.username,
            authorimage:req.body.profilePic,
            title:req.body.title,
            brief:req.body.brief,
            description:req.body.description,
            tag:req.body.tag
        })
        blog1.save();
        const currentUser=await User.findById(req.cookies.userId);
        currentUser.blog.push(blog1.id);
        currentUser.save();
        res.json({blog:blog1, user:currentUser});

    }catch(error){
        console.log(error);
    }
})

router.put('/:id', async(req,res)=>{
    const idx=req.params.id;
    try{
        await blog.findByIdAndUpdate(idx,req.body);
        res.json({MessageEvent:"Updated."})
    }catch(error){
        res.json(error);
    }
})

router.delete('/:id', async(req,res)=>{
    const idx=req.params.id;
    try{
        await blog.findByIdAndDelete(idx);
        res.json({MessageEvent:"Deleted."})
    }catch(error){
        res.json(error);
    }
})

module.exports=router;