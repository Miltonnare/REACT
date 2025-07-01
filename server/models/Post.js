
const mongoose=require('mongoose');

const blogSchema=new  mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"Please Provide a Title"],
            trim:true,
            maxLength:[100,"Title Cannot be more than 100 characters"]
        },
        content:{
            type:String,
            required:[true,'Please Provide the Content']
        },

    }
) 

module.exports=mongoose.model('Post',blogSchema);
