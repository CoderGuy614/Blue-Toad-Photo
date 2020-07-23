import React, { useState } from "react";
import Alert from "./Alert";

const SearchInput = ({ getPhotos }) => {
  const [text, setText] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (e) => {
    setIsEmpty(false);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    text === "" ? setIsEmpty(true) : getPhotos(text);
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="search-input"
            placeholder="Enter a Keyword..."
          />
          <button type="submit">
            <i className="fas  fa-search"></i>
          </button>
        </form>
      </div>
      {isEmpty && <Alert message="Please Enter a Search Keyword" />}
    </>
  );
};

export default SearchInput;
