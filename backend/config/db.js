const mongoose = require("mongoose");
const colors = require("colors")
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connection successfull${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`connection failled ${error}`.red.bold);
  }
};
module.exports = connectDB;
