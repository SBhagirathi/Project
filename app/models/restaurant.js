const mongoose = require('mongoose');
const validator = require('validator');
const Schema =mongoose.Schema;
const restaurantSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    address:{
        locality:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        }
    },
    cuisine:[String],
    mobileNumbers:[
        {
            numType:{
                type:String,
                required:true
            },
            mobileNumber:{
                type:String,
                required:true
            }
        }
    ],
    isAuthorized:{
        default:true,
        type:String
    },
    categories:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
});

const Restaurant = mongoose.model('Restaurant',restaurantSchema);

module.exports = {
    Restaurant
}