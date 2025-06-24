// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import DropdownList from "./dropdown_list/DropdownList";
import { useState } from "react";
import CitySearch from "./CitySearch";
import SearchResults from "./dropdown_list/SearchResults";

function App() {
  // const cities = ["delhi", "noida", "budaun", "bisauli", "neemkarauli", "mumbai", "naashik", "bandra" ];

  // const [city, setCity] = useState("");

  // function handleChange(e) {
  //   setCity(e.target.value);
  //   console.log("New city value:", e.target.value);
  // }

  const [results, setResults] = useState([]);

  return (
    <>
      {/* <div>
        <label htmlFor="city">City:</label>
        <input
          name="city"
          type="text"
          placeholder="Type city here..."
          // value={city} 
          onChange={handleChange}
        />

      </div> */}
      {/* <CitySearch /> */}

      {/* now we will pass the setResults function to the DropdownList component kyun , kyunki results DropdownList comp mei mil raha hai , waha se setResults func ko use krke results var mei pass kr denge */}
      <div className="main-content">
        <DropdownList setResults={setResults} />
        <SearchResults results={results}/>
        <div>This is random text</div>
      </div>
    </>
  );
}

export default App;

