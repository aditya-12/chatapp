import mongoose from 'mongoose';
import { type } from 'os';

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female'],
    },
    profilePic:{
        type:String,
        default:'', 
    }
}, 
// createdAt, updatedAt
{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;