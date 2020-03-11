const db = require("../models");
const axios = require("axios");
const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBY5nR0lSX0aRVsexmK9S34-t-cw15YpLs";


module.exports = {
    findByTitle: function(req, res) {
      const query = req.params.title;
      const url = `${baseURL}+intitle:${query}${APIKEY}&getResults=21`;
      axios.get(url)
      .then(results => {
        res.json(results.data);
      })
      .catch(err => res.status(422).json(err));
    },
    
    findAll: function(req, res) {
      db.Book
        .find({})
        .sort({ date: -1 })
        .then(dbModel => {
          console.log("Find All", dbModel);
          res.json(dbModel)
        })
        .catch(err => console.log(err));
    },

    create: function(req, res) {
      const newBook = req.body
      console.log("Create", newBook);
      db.Book.create(newBook)
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },

    remove: function(req, res) {
      db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },
  };