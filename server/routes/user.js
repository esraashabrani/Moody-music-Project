const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// const uri = "mongodb+srv://Sara-Agha-Alnimer:TMGUY54ZkKH7vne6@moody.96orc.mongodb.net/moody?retryWrites=true&w=majority"
// mongoose.connect(uri /* || "mongodb://localhost/moody "*/,
//   { useNewUrlParser: true,
//   useUnifiedTopology: true }
// );

// const db = mongoose.connection;

const User = require('../models/user')
// const validateInput = require("../../validation/register")

router.route('/signup').post(async(req,res)=> {
  let hash = bcrypt.hashSync(req.body.password, 14);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = hash;
  let user = await User.findOne({ email: req.body.email });
  if (user) {
      return res.status(400).send('That email already exists!');
  }else{
      const newUser = new User({
          firstName,
          lastName,
          email,
          password
      });
      await newUser.save();
      res.send(newUser);
  }
})

//login route
router.post("/login",function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email: email}).then(user => {
    // Check if user exists
    if (!user) {
      return res.json("Email not found" );
    }
      bcrypt.compare(password , user.password, function(err,result){
        if (err) {
          return res.json(err);
        } else if(result === true){
          return res.json(result);
        }
      })
  });
});
//require songs model 
// const sad = require('../models/songs');

// router.get("/sad",function(req, res) {
//   sad.find({},(err,songs) => { 
//     if (err) {
//       console.log(err)
      
//     }
//     console.log(songs)
//     return res.json(songs)
//   });
//   console.log("hello")
//   // res.json("hello")
// });



module.exports = router;