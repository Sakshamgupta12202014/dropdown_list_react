import React from "react";
import { FaSearch } from "react-icons/fa";
import "./DropdownList.css";
import { useState } from "react";

function DropdownList({ setResults }) {
  const [input, setInput] = useState("");

  async function fetchData(value) {

		if(value == "") {
			setResults([])
			return
		}

    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");

    const users = await resp.json(); // human readable format

    const results = users.filter((user, index) => {
      return user.title.toLowerCase().startsWith(value);
    });

		setResults(results)
    // console.log(results);
    // console.log(users);
  }

  function handleChange(value) {
    setInput(value);

    // make an API call only if input box is not empty
		value != "" ? fetchData(value) : fetchData("")
  }

  return (
    <>
      <div className="input-box">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search..."
          id="input"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}

export default DropdownList;
