const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const StudentSchema = require('../Schema/StudentSchema');
const Student = new mongoose.model('Student',StudentSchema)
// ----Show student list-----
router.get('/',async(req,res)=>{
  res.send("Hello Student....!")
})
// ----Student ID-----
router.get('/:id',async(req,res)=>{

})
// -----single Student Registraton-----
router.post('/',async(req,res)=>{
 const newStudent = new Student(req.body);
 await newStudent.save();
 res.status(200).json("Inserted Successfully..")
  
})
// ----multiple Student registration-----
router.post('/all',async(req,res)=>{
 await Student.insertMany(req.body);
 res.status(200).json("Many Student Data Inserted Successfully..")
})
// -----Student data update using id---
router.put('/:id',async(req,res)=>{
 await Student.updateOne({_id:req.params.id},{$set:{status:"True"}});
 res.status(200).json("Status Updated Successfully..")
})
// ------Student data delete-------
router.delete('/:id',async(req,res)=>{

})

module.exports = router;