import User from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../model/token.js';


dotenv.config()

export const  signupUser=async (req,res)=>{

    try{
        
        // const salt=await bcrypt.genSalt()
        const hashedPassword=await bcrypt.hash(req.body.password,10) // second argument is salt and the process is asynchronous because it takes time for hashing 
        const user={name:req.body.name,username:req.body.username,password:hashedPassword};
        const newUser=new User(user);
        await newUser.save();
        return res.status(200).json({msg:'signup successful'});
    }catch(error){
        return res.status(500).json({msg:'error while signup the user'});
    }  
 }

 export const loginUser=async(req,res)=>{
     let user=await User.findOne({username:req.body.username})
    // console.log(user.name)
     if(!user){
        return res.status(400).json({msg:'username does not match'});
     }
     
     try{
    //     const hashedPassword=await bcrypt.hash(req.body.password,10)
    // console.log(hashedPassword)
        // console.log(user.password)
        let match= bcrypt.compare(req.body.password,user.password)

        
        if(match){
            
            // refresh token is needed because access token expires after 15 minutes
            const accessToken=jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{expiresIn:'15m'});
           
            const refreshToken=jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY);
            
            const newToken=new Token({token:refreshToken});
            await newToken.save();
            return res.status(200).json({accessToken,refreshToken,name:user.name,username:user.username});
        }else{
            return res.status(400).json({msg:'password does not match'});
        }

     }catch(error){
          return res.status(400).json({msg:'error while login in user'})
     }
 }



































