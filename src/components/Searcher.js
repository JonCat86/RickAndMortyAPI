import React, { useState } from "react";

const Searcher = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search:</h3>
      <input
        className="search-bar"
        type="search"
        name="search-bar"
        id="search-bar"
        onChange={handleChange}
        value={searchValue}
      />
    </form>
  );
};

export default Searcher;
