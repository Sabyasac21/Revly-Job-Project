const router = require("express").Router();
const User = require("../../Model/UserModel/user");
const jwt = require("jsonwebtoken");
const doubtForm = require("../../Model/StudentFormModel");
const authMiddleware = require("../Middlewares/Authorization");
// const user = require("../../Model/UserModel/user");
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
        expiresIn: "1h",
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
    const { classGrade, subject, topic } = req.body;

    const studentId = req.userId;

    const newDoubtForm = new doubtForm({ ...req.body, studentId });

    await newDoubtForm.save();

    res.send({
      message: "Submitted",
      success: true,
      data: newDoubtForm,
    });
  } catch (error) {
    // console.log('k hua');
    res.status(404).send({
      message: error.message,
      success: false,
      message2: "uff..",
    });
  }
});

router.get('/:studentId', authMiddleware, async (req, res)=>{
  try {
    const data = await doubtForm.find({studentId:req.body.userId})
      res.send({
        message:'Data Fetched',
        success: true,
        data: data
      })
    
  } catch (error) {
    res.status(500).send({
      message: 'Error fetching data',
      success: false
    })
  }
})

module.exports = router;
