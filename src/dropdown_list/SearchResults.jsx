import React from "react";
import "./SearchResults.css";

// SearchResults is array of objects
function SearchResults({ results }) {

  function handleClick(e) {

  }
  return (
    <div className="search-list">
      {results.length > 0 &&
        results.map((user, index) => {
          return (
            <div className="list-item" key={index} onClick={handleClick}>
              {user.title}
            </div>
          );
        })}
    </div>
  );
}

export default SearchResults;
