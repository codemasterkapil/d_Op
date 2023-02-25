// password-hdvD5sn!9UG!U7L

import mongoose from 'mongoose';

export const connection = async(password,username)=>{

    
    const URL=`mongodb://${username}:${password}@ac-qg1lqyk-shard-00-00.btb2lda.mongodb.net:27017,ac-qg1lqyk-shard-00-01.btb2lda.mongodb.net:27017,ac-qg1lqyk-shard-00-02.btb2lda.mongodb.net:27017/?ssl=true&replicaSet=atlas-2401mc-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
         await  mongoose.connect(URL,{useNewUrlParser : true});
         console.log('connected successfully');
    }catch(error){
        console.log('error in connection' ,error);
    }
   
} 


