const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        name : {
            type:String,
            required:true
        },
        email : {
            type:String,
            required:true,
            unique:true
        },
        password : {
            type:String,
            required:true
        },
        isAdmin : {
            type:Boolean,
            required:true,
            default:false
        }
    },
    {
        timestamps:true
    }
)

//User Validation
userSchema.method.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword,this.Password);
}

module.exports = mongoose.model('User',userSchema)