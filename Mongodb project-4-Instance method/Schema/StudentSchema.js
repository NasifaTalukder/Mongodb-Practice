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
// ---custom created method--------
studentSchema.methods={
    studentAttend:function(){
      return mongoose.model("Student").find({status:"False"})
    }
}
module.exports=studentSchema;