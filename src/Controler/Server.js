const express = require("express");
const app = express();
const User =require("../Model/UserModel/user");
const cors = require('cors')


app.use(cors())
app.use(express.json())

// mongoDb setup-----------
const mongoose = require("mongoose");

mongo_url =
  "mongodb+srv://sabyasachigolu:yEClV9YvYMgm6rML@cluster0.regeolq.mongodb.net/?retryWrites=true&w=majority";
// console.log(mongo_url);
mongoose.connect(mongo_url);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connected to Database");
});
connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

// --------------------------

// app.post("/register", async (req, res) => {
//   try {
//     const userExist = await User.findOne({ email: req.body.email });
//     if (userExist) {
//     const  result = {
//             success: false,
//             message: "User Exist, Login to continue",
//           }
//     console.log(result);
//       res.send(result);
//     } else {
//       const newUser = new User(req.body);
      
//       await newUser.save();
//       response = {
//         success: true,
//         message: "User Registered",
//       }
//       res.send(response);
//     }
//   } catch (error) {
//     res.send({
//         success: false,
//         message: `Registration failed. Please try again later. ${error} `,
//       });
//   }
// });
const userRoute = require('./Routes/UserRoutes')

app.use('/', userRoute)

app.listen(3001, () => {
  console.log("Server Running");
});
