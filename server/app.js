const express = require("express");
const mongoose=require('mongoose');
const cors=require('cors')
const url=require('url');
const passport = require("passport")
const bodyParser = require('body-parser')
const app = express();
const passportlocalmongoose=require('passport-local-mongoose');
const session=require('express-session');
var conn =mongoose.Collection;
 
app.use(cors())
//middlewares
app.use(cors())
app.use(express.json())

 
  
const PORT = process.env.PORT || 8080;






//db design
const u="mongodb+srv://@cluster0.64ump.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";






//database connection established

mongoose.connect(u,{useUnifiedTopology:true,useNewUrlParser:true},function(err){
  if(err){
  console.log(err);
  }
  else{
    console.log("mongodb connected Successfully");
  }
})
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify', false);

app.use(session({
  secret:"thisismysecret",
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());








//user schema
const email_newuserschema=new mongoose.Schema({
  email:{
    type:String,
    index:true
  },
  password:String,
  
  user_name:{
    type:String,
    index:true
  },

});

email_newuserschema.plugin(passportlocalmongoose);
const email_user=mongoose.model('new_form1111',email_newuserschema);
 
passport.use(email_user.createStrategy());
passport.serializeUser(email_user.serializeUser());      //replace when goole oauth going to used
passport.deserializeUser(email_user.deserializeUser());






//registering new users


app.post('/register',function(req,res)
{
  console.log(req.body.username);
  
  console.log(req.body.email);
  console.log(req.body.password);
  

email_user.register({email:req.body.email,username:req.body.username},req.body.password,function(err){
      if(err)
      {
      console.log(err);
        console.log("error is there")



        }

  else{
    console.log(err);
      passport.authenticate('local')(req,res,function()
      {
        res.send("successfully register")
    })

  }
})

});




 


 



//user emails details

const email_userschema=new mongoose.Schema({

  email:
  {
    type:String,
    index:true
  },

   email_content:
   {
    type:String,
    index:true
   },
 
  
   sent_to:
   {
    type:String,
    index:true
   },
  
   cc_detail:
    {
      type:String,
      index:true
    },

 
    date_sent:
    {
      type:Date,
      index:true
    },


  
});


const email_user_details=mongoose.model('new_form12222',email_userschema);



 
//login-user
app.post('/login',function(req,response)
{

const isuser=new email_user({
  username:req.body.email,
  password:req.body.password
})
 req.login(isuser,function(err,result)
    {
      if(err)
      {
        console.log(err)
    console.log("error is there")
      }
      else
      {
        passport.authenticate('local')(req,response,function(){
          console.log("logged in") 
          response.redirect("/user_dash")
       

        })
      console.log(isuser)  
      }})
    
    
    });


app.get("/user_dash",function(req,res)
{



res.send("hello user")



})







//login with google


//storing emaildata in database
app.post("/send_mail",function(req,res)
{
    const email=req.user.email
    
    var email_details = new email_user_details(
      {  
        email:email,
        send_to:req.body.toEmail,
        email_content:req.body.mailbody,
        cc_detail:req.body.CCEmail,
        date:25/06/2020,


      });
    
    email_details.save(function(err,result){ 
      if (err){ 
          console.log(err); 
      } 
      else{ 
          console.log(result) 
      } 
      
      console.log("good")
  }) 
      
  console.log(email_details)
    
      





})




//users dashboard
app.get('/history',function(req,res)
{

   const email="suraj11kasaudhan@gmail.com"
  email_user_details.findOne({email:email},function(err,result)
  {
    console.log(result)
    res.status(200).send(result);
  
  })
    
 



})


   













//when user click on send mail option  data saved in json and saved in mongodb





//opeing history page
//fetching all the mails from current user and show them on ui accordig to bak date









//opeing homepage 
//fetching all the mails of current user and show them on ui according to future date







//logout option



















//






app.get('/homepage',function(req,res)
{
  
  email=req.user.email
   useReducer.findOne()
  {



  }





})

app.listen(PORT, console.log(`Server started on port ${PORT}`));



//sign up and login operation






//sending mail option
//



 