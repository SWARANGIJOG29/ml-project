const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const DB=process.env.DATABASE;
const port = process.env.PORT || 5000;
const Contactus= require('./models/contactus');


const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongodb+srv//dhiraj:dhiraj@025@cluster0.hlpd1ui.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://dhiraj:Djnarendra@025@cluster0.hlpd1ui.mongodb.net//Flower", {
      useNewUrlParser: true,
      useUnifiedTopology: true
 })
  .then(console.log("Connected to MongoDB"))
   .catch((err) => console.log(err));

app.get("/work", async(req, res)=> {
    res.status(200).send("API Working");
  });


  app.post("/contactus",async(req,res)=>{
   const name = req.body.name;
   const email = req.body.email;
   const subject = req.body.subject;
   const message = req.body.message;
 
   try{
   
    const entry = new Contactus({
      name:name,
      email:email,
      subject:subject,
      message:message,

    });
    entry.save();
    res.status(200).json({message:'Success'});
   }catch(err){
    res.status(500).json("Error occured");
   }

  });

app.listen(5000,function(){
  console.log("Server start at port 5000");
})

