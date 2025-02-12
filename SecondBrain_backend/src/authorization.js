const express = require("express");
const router = express.Router();
const {z} = require('zod');
const {User} = require('./db');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwt_key = process.env.jwt_key;

router.post('/signup',async (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    const requiredSchema = z.object({
        username:z.string().min(3,'Username must be at least 3 characters long').max(10,'Username must not exceed 10 characters').regex(/^[a-zA-Z]+$/, "Username must contain only letters"),
        password:z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password must not exceed 20 characters")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter") 
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter") 
        .regex(/[0-9]/, "Password must contain at least one number") 
        .regex(/[\W_]/, "Password must contain at least one special character")
                });
                
              


                const isValidated = requiredSchema.safeParse(req.body);
                if(isValidated.success){
                    const userExists = await User.findOne({username});
                    const hashedPassword = await bcrypt.hash(password,10);
                    if(userExists){
                        res.status(403).json({
                            msg:"user already exists with this username"
                        })
                        return;
                    }
                    await User.create({
                        username: username,
                        password: hashedPassword
                    })
                    res.status(200).json({
                        msg:"user created succesfully"
                    })
                }
                    else{
                        res.status(411).json({
                            msg:isValidated.error.issues[0].message
                        })
                    }
                
})

router.post('/signin' , async (req,res)=>{
const {username,password} = req.body;
const foundUser = await User.findOne({
    username
})
if(!foundUser){
    res.json({
        msg:"user not found"
    })
    return;
}
const passwordMatch = await bcrypt.compare(password,foundUser.password);
if(passwordMatch){
const token = jwt.sign({
    _id:foundUser._id
     },jwt_key);
res.json({
    token:token
})}

else{
    res.json({
        msg:"wrong password"
    })
}

})


module.exports = router;