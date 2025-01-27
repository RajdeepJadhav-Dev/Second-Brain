const express = require("express");
const router = express.Router();
const {Content,Link, User} = require('./db.js');
const UserMiddlewear = require('./UsersMiddlewear.js');
const mongoose = require("mongoose");
const random = require('./util.js');

router.post('/add',UserMiddlewear ,async (req,res)=>{
try{
    const {title,link,type} = req.body;
     const response = await Content.create({
        link,
        type,
        title,
        userId:req._id,
       
    })
res.json({
    msg:"content added"
})
}
catch(e){
    console.log(e);
    res.json({
        msg:"there was an error"
    })
}

})

router.get('/read',UserMiddlewear,async (req,res)=>{
    const userId=req._id;
    const user = await User.findById(userId);
    const content = await Content.find({
        userId:userId
    }).populate("userId","username")
    if(user.firstVisit){
        Content.create({
            title:'example',
            link:'https://www.youtube.com/watch?v=PZ7lDrwYdZc',
            type:'youtube',
            userId:req._id
        })
    }
    res.json({
        content
    })
    user.firstVisit = false;
    await user.save();
})


    router.delete('/delete',UserMiddlewear,async (req,res)=>{
        const userId=req._id;
        const _id = req.body.contentId;
        await Content.deleteOne({
            _id,
            userId:userId
        })
        res.json({
            msg:"deleted sucessfully",
        })
    })

router.post('/share',UserMiddlewear,async (req,res)=>{
    const share = req.body.share;
    try{
        let hash=random(10);
    if(share){
        await Link.create({
            hash:hash,
            userId:req._id
        })
        res.json({
            hash:hash
        })
        return;
    }
    else{
        await Link.deleteOne({
            _id:req._id,
        })
        res.json({
            msg:"sharable link disabled"
        })
    }
}catch(e){
    res.json({
        error:e.message
    })
}

})

router.get('/share/:hash',async(req,res)=>{
    const hash = req.params.hash;
    try{
   const link = await Link.findOne({
    hash:hash
   }) 
   if(!link){
    res.json({
        msg:"invalid hash"
    })
    return;
   }
  const Userdoc = await User.findOne({
    _id:link.userId
  })
   const content = await Content.find({
    userId:Userdoc._id
  })
  res.json({
    username:Userdoc.username,
    content:content
  })
}catch(e){
    res.json({
        error:e.message
    })
}
})

module.exports = router;