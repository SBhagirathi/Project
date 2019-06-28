const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value);
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:128
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
});


const User = mongoose.model('User',userSchema);

module.exports = {
    User
}