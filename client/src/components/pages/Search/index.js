import React, { useState, useEffect } from 'react';
import API from "../../../utils/API";
import SearchBar from "../../SearchBar";
import Book from "../../Book";
import { Container } from "react-bootstrap";
import Title from "../../Title";
import "./style.css";

function Search() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchBooks(search);

  }

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
  }

  const searchBooks = (query) => {
    API.getBooks(query)
      .then(res => {
        setBooks(res.data.items);
      })
  }

  const renderBook = (book) => {
    let searchPage = true;
    let renderedBook =
      <Book
        searchpage={searchPage}
        key={book.id}
        title={book.volumeInfo.title}
        authors={book.volumeInfo.authors}
        link={book.volumeInfo.infoLink}
        image={book.volumeInfo.imageLinks.thumbnail}
        description={book.volumeInfo.description}
      />;
    return renderedBook;

  }
  console.log("books", books);
  return (
    <Container className="main">
      <Title title="Google Book Search" sub="Search and save books that you'd like to read" />
      <SearchBar handleFormSubmit={handleFormSubmit} handleOnChange={handleOnChange} value={search} />
      <Container className="bookView">
        {books.map(book =>
          renderBook(book)
        )}
      </Container>
    </Container>

  );
}

export default Search;