const User = require('../Models/users.model');


const findData = async (req,res) =>{
    const data= await User.find({})
    console.log(data)
    res.status(200).send(data)
    
 }
 const userdata=async(req,res)=>{
   console.log(">>>>>",req.body)
   const {_id}=req.body
   const data=await User.findById({_id:_id}) 
   console.log(">>>>>>>>>>>",data)
   res.status(200).send("Data Find")
 }

 const changeName=(req,res)=>{
   res.status(200).send("ffffffff")
 }

 module.exports={findData,userdata}