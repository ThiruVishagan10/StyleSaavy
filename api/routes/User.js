const express = require( 'express' )
const userRoute = express.Router();
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

userRoute.post('/login',
    asyncHandler(async(req,res)=>{
        const {email, password} = req.body;
        const user = await User.findOne({email}); 
        if(user && (await user.matchPassword(password)) ){
            res.json({
                _id : user.id,
                name : user.name,
                isAdmin : user.isAdmin,
                token : null,
                createdAt : user.createdAt,
            })
        }else{
            res.status(401);
            throw new Error("User not found");
        }
        }
    )
);

module.exports = userRoute;