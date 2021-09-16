const mongoose = require('mongoose')
const url = "mongodb+srv://saurabhrana:Saurabh123@cluster0.gg56e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const config = require('config');
const connectDB = async () => {
    try {
      await mongoose.connect(
        url,
        {
          useNewUrlParser: true
        }
      );
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;

