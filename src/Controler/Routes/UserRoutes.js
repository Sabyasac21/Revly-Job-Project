const router = require("express").Router();
const User = require("../../Model/UserModel/user");
const jwt = require("jsonwebtoken");
const doubtForm = require("../../Model/StudentFormModel");
const authMiddleware = require("../Middlewares/Authorization");

router.post("/register", async (req, res) => {
  try {
    
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      res.send({
        success: false,
        message: "User Already Exist",
      });
    }

    const newUser = new User(req.body);
    // console.log(newUser);
    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.jwt_secret,
      {
        expiresIn: "7h",
      }
    );

    res.send({
      success: true,
      message: "User Registered",
      data: token,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).send({ success: false, message: "Invalid Credentials" });
    }
    const isCorrectPassword = req.body.password === user.password;
    if (!isCorrectPassword) {
      res.status(401).send({ success: false, message: "Invalid Password" });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.jwt_secret,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).send({
      success: true,
      message: "Succesfully logged-in",
      data: token,
      user: user,
    });
  } catch (error) {
    res.send({ success: false, message: `error: ${error}` });
  }
});

router.post("/doubt", authMiddleware, async (req, res) => {
  try {
    const { classGrade, subject, topic , language} = req.body;

    const studentId = req.userId;

    const newDoubtForm = new doubtForm({ ...req.body, studentId });

    await newDoubtForm.save();

    res.send({
      message: "Submitted",
      success: true,
      data: newDoubtForm,
    });
  } catch (error) {
    res.status(404).send({
      message: error.message,
      success: false,
      message2: "uff..",
    });
  }
});

router.get('/studentDashBoard/:studentId', authMiddleware, async (req, res)=>{
  try {
    
    const data = await doubtForm.find({studentId: req.params.studentId})
      res.send({
        message:'Data Fetched',
        success: true,
        data: data
      })
    
  } catch (error) {
    res.status(500).send({
      message: `failed to get user ${error}`,
      success: false
    })
  }
})

router.get('/teacherDashBoard/:teacherId', authMiddleware, async(req, res)=>{
  
  try {
    // console.log(req.params);
    const user = await User.findById(req.userId)
    // console.log(user);
    const {subject, batch, language} = user
    const data = await doubtForm.find({subject: subject, batch: batch, language: language})
    
    res.send({
      message: 'data fetched',
      success: true,
      data: data
    })
  } catch (error) {
    
    res.send({
      message: error,
      success: false,
      
    })
  }
})

router.get('/doubts', authMiddleware, async(req, res)=>{
  try {
    const response = await doubtForm.find({studentId: req.userId});
    res.send({
      message: 'All doubts successfully fetched',
      success: true,
      data: response
    })
  } catch (error) {
    res.send({
      message: `error ${error}`,
      success: false
    })
  }
})

router.get('/history', authMiddleware, async(req, res)=>{
  try {
    
    const response = await doubtForm.find({resolved: true})
    console.log(response);
    res.send({
      message: 'All resolved doubts successfully fetched',
      success: true,
      data: response
    })
  } catch (error) {
    res.send({
      message: error,
      success: false
    })
  }
})

router.get('/live', authMiddleware, async(req, res)=>{
  try {
    
    const response = await doubtForm.find({resolved: false})
    
    res.send({
      message: 'All current doubts successfully fetched',
      success: true,
      data: response
    })
  } catch (error) {
    res.send({
      message: error,
      success: false
    })
  }
})

module.exports = router;
