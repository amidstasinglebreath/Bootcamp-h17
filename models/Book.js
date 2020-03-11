const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },

  authors: {
    type: Array,
    trim: true,
    required: "Authors is Required"
  },

  description: {
    type: String,
    unique: true,
    required: "Description is Required"
  },

  image: {
    type: String,
    required: "Image is Required"
  },
  link: {
      type: String,
      unique: true,
      required: "Link is Required"
  }

});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;