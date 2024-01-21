const router = require("express").Router();
const User = require("../../Model/UserModel/user");
const UserSubject = require("../../Model/UserSubject/UserSubject");
const jwt = require('jsonwebtoken')

router.post("/register", async (req, res) => {
  try {
    // console.log('form submitted');
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      res.send({
        success: false,
        message: "User Already Exist",
      });
    }
    // console.log(req.body.role);
    const newUser = new User(req.body);
    // console.log(newUser);
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, email: newUser.email }, process.env.jwt_secret, {
      expiresIn: "1h", 
    })
   

    res.send({
      success: true,
      message: "User Registered",
      data: token
     
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if (!user){
      res.status(401).send({success: false, message: "Invalid Credentials"})
    }
    const isCorrectPassword = await req.body.password===user.password;
    if (!isCorrectPassword){
      res.status(401).send({success: false, message: "Invalid Password"})
    }
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.jwt_secret, {
      expiresIn: "1h", 
    })
    res.status(201).send({success: true, message: "Succesfully logged-in", data: token})
    ;
  } catch (error) {
    res.send({success: false, message: `error: ${error}`})
  }
});

module.exports = router;
