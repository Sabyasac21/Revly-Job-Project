const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);
const connection = mongoose.connection
connection.on("connected", () => {
    console.log("Connected to Database");
  });
  connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
module.exports = connection;