//const mongoose = require('mongoose');

// var employeeSchema = new mongoose.Schema({
//     fullName: {
//         type: String,
//         required: 'This field is required.'
//     },
//     email: {
//         type: String
//     },
//     mobile: {
//         type: String
//     },
//     city: {
//         type: String
//     }
// });

// Custom validation for email
const mongoose=require('mongoose')
const poolSchema=new mongoose.Schema({
    PoolID:{
        type:Number,
        unique:true,
        required: 'This field is required.'
    },
    PoolName:{
        type:String,

        trim:true,
        required: 'This field is required.'
    },
    Hemper1:{
        type:String,
        trim:true,
        //required: 'This field is required.'
    },
   
    Hemper1Worth:{
        type:Number,
        //required: 'This field is required.'
     },
     Hemper2:{
        type:String,
        trim:true,
        //required: 'This field is required.'
    },
   
    Hemper2Worth:{
        type:Number,
       //required:true,
       //required: 'This field is required.'
     },
     Hemper3:{
        type:String,
        trim:true,
        //required: 'This field is required.'
    },
   
    Hemper3Worth:{
        type:Number,
        //required: 'This field is required.'
     },
    
    CoinsNeededToParticipate:{
        type:Number,
        //required: 'This field is required.'
    },
    PoolStartDate:{
        type:Date,
        //required: 'This field is required.'
    },
    PoolEndDate:{
        type:Date,
        //required: 'This field is required.'
    }

})

//const poolData=new mongoose.model("Pools",poolSchema)
//module.exports=poolData
// poolSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

mongoose.model('Pools', poolSchema);