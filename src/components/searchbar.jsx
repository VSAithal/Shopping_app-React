import React from "react";
const SearchElement = () => {
  return (
    <form className="form-inline" action="/action_page.php">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
      />
      <button className="btn btn-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchElement;
