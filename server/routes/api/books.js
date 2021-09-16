const express = require('express');

const router =   express.Router()

const Book = require('../../models/Book')


const multer = require('multer');

const { v4: uuidv4 } = require('uuid');

const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'image');
  },
  filename: function(req, file, cb) {   
      cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});


const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });


router.get('/',(req, res)=>{
    Book.find()
       .then(books => res.json(books))
      .catch(err => res.status(404).json({nobooksfound:'No books found'}))
})

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});
router.post('/', upload.single('image'),(req,res) => {
    console.log(req.body);
    const Book_name = req.body.Book_name;
    const Author_name = req.body.Author_name;
    const Publish_date= req.body.Publish_date;
    const image = req.file.filename;
    const Description = req.body.Description;
    const Data = {
      Book_name,
      Author_name,
      Publish_date,
      image,
      Description
  }
  const newUser = new Book(Data);
      newUser.save()
      .then(book => res.json({ msg: 'Book added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(book => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
});
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a book' }));
});
module.exports = router;
