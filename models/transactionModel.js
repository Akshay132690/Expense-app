const mongoose=require('mongoose')



const transactionSchema=new mongoose.Schema({
    userid:{
      type:String,
      required:true,
    },
    amount:{
        type:Number,
        required:[true,'Amount is required']
        
    },
    type:{
        type:String,
        required:[true,'Type is required ']
    },
    category:{
        type:String,
        required:[true,'category is required']  
      },
      reference:{
        type:String
        
      },
      description:{
        type:String,
        required:[true,'description is required']
      },
      date:{
        type:Date,
        required:[true,'date is required']
      }
},{timestamps:true})

const transactionModel=mongoose.model('transactions',transactionSchema)
module.exports=transactionModel