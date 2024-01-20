const router = require("express").Router();
const User = require("../../Model/UserModel/user");
const UserSubject = require("../../Model/UserSubject/UserSubject");

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
    res.send({
      success: true,
      message: "User Registered",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/register/profile/teacher-form", async (req, res) => {
  try {
    const newSubject = new UserSubject(req.body);
    console.log(new User);
    await newSubject.save();
    res.send({
      success: true,
      message: "Saved",
    });
  } catch (error) {
    res.send(error)
  }
});

module.exports = router;
