import mongoose from 'mongoose';

const Token=mongoose.model('token',{
    token:{
        type: 'string',
        required: true,
    }
});

export default Token;