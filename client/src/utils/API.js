import axios from "axios";
// const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "AIzaSyBY5nR0lSX0aRVsexmK9S34-t-cw15YpLs";

export default {
  // Get Products with query
  getBooks: function(query) {
    return axios.get(`/api/books/${query}`);
  },
//   // Gets the book with the given id
  getDbBooks: function() {
    return axios.get("/api/books/saved");
  },
//   // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete(`/api/books/saved/${id}`);
  },
//   // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};