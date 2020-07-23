import React, { useState } from "react";

const SearchInput = ({ getPhotos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPhotos(text);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit">
          <i className="fas  fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
