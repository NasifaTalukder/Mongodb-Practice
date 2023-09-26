const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const StudentSchema = require('../Schema/StudentSchema');
const Student = new mongoose.model('Student',StudentSchema)
// ----Show student list-----
router.get('/',async(req,res)=>{
  // let manyStudentDetails=await Student.find({status:"True"})
  let manyStudentDetails=await Student.find({})
  res.status(200).send({manyStudentDetails:manyStudentDetails})
})
// ----FIND Student USING ID-----
router.get('/:id',async(req,res)=>{
 let studentDetails=await Student.findOne({_id:req.params.id});
//  console.log(studentDetails)
 res.status(200).send({studentDetails:studentDetails})
})
// -----single Student Registraton-----
router.post('/',async(req,res)=>{
  const {name,roll,department,status} = req.body;
  console.log(name,roll,department,status);
  if(!name || !roll || !department || !status)
     return res.status(401).send("Please Fill up your all data...");
  let studentRollCheck=await Student.findOne({roll});
  console.log(studentRollCheck)
  if(studentRollCheck)
  return res.status(200).send("Plaese try to Enter another roll number...")

  try{
    const newStudent = new Student(req.body);
    await newStudent.save();

    res.status(200).json("Inserted Successfully..");
  }catch(error){
    res.status(404).json("Server Error..");
  }
})
// ----multiple Student registration-----
router.post('/all',async(req,res)=>{
 await Student.insertMany(req.body);
 res.status(200).json("Many Student Data Inserted Successfully..")
})
// -----Student data update using id---
// router.put('/:id',async(req,res)=>{
//  let findOneAndUpdateMehod=await Student.findOneAndUpdate({_id:req.params.id},{$set:{status:"False"},},{new:true});
// console.log(findOneAndUpdateMehod)
//  res.status(200).json("Status Updated Successfully..")
// })
// ---------------Many Students Data Update=-----------
router.put('/updateAll',async(req,res)=>{
  await Student.updateMany({status:"True"},{$set:{status:"False"}});
  res.status(200).json("Many Data Updated Successfully..")
 })

// ------Student data delete-------
router.delete('/:id',async(req,res)=>{
 await Student.deleteOne({_id:req.params.id});
 res.status(200).send("Deleted one Student Data")
})
// -------------Many Student Data Delete------------
router.delete('/del',async(req,res)=>{
  await Student.deleteMany({status:"False"});
  res.status(200).send("Many Students data deleted")
 })
 
module.exports = router;