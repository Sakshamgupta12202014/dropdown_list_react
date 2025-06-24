import React from 'react'
import { useState } from 'react';
import './CitySearch.css'


// simple type of dropdown list

function CitySearch() {
  const cities = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bengaluru', "Dholakpur"];
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const matches = cities.filter(city =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(value != "" ? matches : []);
  };

  const handleSelect = (city) => {
    setInput(city);
    setSuggestions([]);
  };

  return (
    <div>
      <label htmlFor='city'>City:</label>
      <input
        type="text"
        name='city'
        value={input}
        onChange={handleChange}
        placeholder="Enter city"
      />
      {/* <div>
        <label htmlFor='country'>Country:</label>
        <input
        type="text"
        placeholder="Enter city"
      />
      </div> */}

      {/* conditional rendering */}
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((city, index) => (
            <li key={index} onClick={() => handleSelect(city)}>
              {city}
            </li>
        ))}
        </ul>
      )}

    </div>
  );
}

export default CitySearch