
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwt_key = process.env.jwt_key;

function UserMiddlewear(req,res,next){
    const token = req.headers["authorization"];
    const decodedToken = jwt.verify(token,jwt_key);
if(decodedToken){
        req._id = decodedToken._id;
        next();
    }else{
        res.json({
            msg:"you are not signed in"
        })
    }
}

module.exports = UserMiddlewear
