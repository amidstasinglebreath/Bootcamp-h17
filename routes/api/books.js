const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

//= /api/books
router
  .route("/")
  .post(booksController.create);
  
// = /api/books/saved
router
  .route("/saved")
  .get(booksController.findAll)

// = /api/books/saved/:id
router
  .route("/saved/:id")
  .delete(booksController.remove);

// Google API routes
router
  .route("/:title")
  .get(booksController.findByTitle)

// = /api/books/saved/:id

module.exports = router;