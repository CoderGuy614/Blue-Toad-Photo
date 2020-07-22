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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Search!</button>
      </form>
    </div>
  );
};

export default SearchInput;
