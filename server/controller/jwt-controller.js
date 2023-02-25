import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { request } from 'express';

dotenv.config();

export const authenticateToken = (req,res,next)=>{
   
   const authHeader=req.headers['authorization'];
   const token=authHeader && authHeader.split(' ')[1];

   if(token == null){
      return res.status(401).json({msg:'token not found'});
   }

   jwt.verify(token,process.env.ACCESS_SECRET_KEY,(error,user)=>{
     if(error){
        return res.status(403).json({msg:'Invalid token'});
     }
     request.user=user;
     next();
   })

}