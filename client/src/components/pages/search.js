import React, { useState } from "react";
import axios from "axios";


function Search() {
    const [book, setBook] = useState("");
    const [savedBooks, setSavedBooks] = useState([]);
    const [result, setResult] = useState([]);
    const [apiKey, setApikey] = useState("AIzaSyBY5nR0lSX0aRVsexmK9S34-t-cw15YpLs")

    function handleChange(event) {
        const book = event.target.value;
        setBook(book);
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey)
            .then(data => {
                setResult(data.data.items)
                console.log(data.data.items)
            })
    }

    function handleClick(book) {
        //event.preventDefault();
        setSavedBooks([...savedBooks, book]);
        console.log(savedBooks)

    }

    return (
        <div className="container">
            <h1>Google Books Search</h1>
            <h2><a href="/saved">Saved</a></h2>
            <h2><a href="/">Search</a></h2>

            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text"
                        onChange={handleChange}
                        className="input-control mt-10" placeholder="Search for a Book" autoComplete="off"></input>
                </div>
                <button className="btn btn-success">Search</button>
            </form>
            {result.map((book, index) => (
                <div className="container" key={index}>
                    <div className="card p-2 m-2">
                        <a className="p-3" target="_blank" rel="noopener noreferrer" >
                            <span className="btn btn-success" onClick={() => (handleClick(book.volumeInfo))}><i className="material-icons">add</i></span>
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                            <h3>{book.volumeInfo.title}</h3>
                            <h4>{book.volumeInfo.authors}</h4>

                        </a>
                    </div>
                </div>
                // href={book.volumeInfo.previewLink} - for going to google books, but in <a>
            ))}
        </div>

    );
}


export default Search;