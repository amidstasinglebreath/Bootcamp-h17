import React from "react";
import "./style.css";

const SearchForm = ({handleFormSubmit, handleOnChange, value}) => {
  return (
    <form>
      <div className="form-group searchBox">
        <label id="find" htmlFor="search"><i>Find a Book</i>:</label>
        <input
          onChange={handleOnChange}
          value={value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a book..."
          id="search"
        />
        <br />
        <button onClick={handleFormSubmit} className="searchBtn btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;