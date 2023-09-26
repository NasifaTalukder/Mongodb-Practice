const mongoose=require('mongoose');
const studentSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    roll:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["True","False"]
    }
})

module.exports=studentSchema;