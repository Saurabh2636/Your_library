const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    Book_name :{
        type:String,
        required:true
    
    },
    Author_name:{
        type:String,
        required:true
    },
    Publish_date:{
        type:Date,
        required:true
    },
    image:{
       type:String,
       required:true
    },
     Description: {
        type:String,
        required:true
     
    }
})
module.exports = Book = mongoose.model('book', BookSchema);