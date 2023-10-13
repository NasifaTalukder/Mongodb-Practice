const express=require('express');
const studentEndPoint=require('./StudentEndPoint/StuEndPoint');
const mongoose=require('mongoose');
const app = express();
app.use(express.json());
// const js=require('./intance.js')



// ----Databse connect(mongoose)------
mongoose.connect('mongodb://127.0.0.1:27017/students')
 .then(()=>{
    console.log("Database connected Successfully...")
 })
 .catch((err)=>{
    console.log(err);
 })

app.get('/',(req,res)=>{
    res.send("THIS IS HOME PAGE........!");
 })
//  -------studentEndPoint handle-----
 app.use('/student',studentEndPoint);
// -------Error Handler--------
function errorHandle(err,req,res,next) {
    if(res.headerSent){
        return next(err);
    }
     res.status(500).json({error:err});
}


app.listen(5000,()=>{
    console.log("Server is running........")
})























