const express = require("express");
require('dotenv').config()
const dbconfig = require('./Config/DbConfig')
const app = express();
const User =require("../Model/UserModel/user");
const cors = require('cors')


app.use(cors())
app.use(express.json())


const userRoute = require('./Routes/UserRoutes')

app.use('/', userRoute)

app.listen(3001, () => {
  console.log("Server Running");
});
