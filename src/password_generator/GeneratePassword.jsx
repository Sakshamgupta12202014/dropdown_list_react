import React, { useCallback, useEffect, useState, useRef } from "react";

function GeneratePassword() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numbersAllowed, setNumbersAllowed] = useState(false);

  const [charactersAllowed, setCharactersAllowed] = useState(false);

  const passwordRef = useRef(null);

  // this function is only cached for optimization purpose as it is called very frequently you can also wriet this function normally
  const generatePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*()~><?|}{[]:;.,";

    let strLen = str.length;
    for (let i = 0; i < length; i++) {
      let rand_indx = Math.floor(Math.random() * strLen);
      pass += str[rand_indx];
    }

    setPassword((prevPass) => pass);
  }, [length, numbersAllowed, charactersAllowed]);

  function handleClick(event) {
    let check_box = event.target.name;

    if (check_box == "numbers") {
      setNumbersAllowed((prev) => {
        console.log(`numbers : ${!prev}`);
        return !prev;
      });
      // console.log(numbersAllowed)
    } else if (check_box == "characters") {
      setCharactersAllowed((prev) => {
        console.log(`characters : ${!prev}`);
        return !prev;
      });
      // console.log(charactersAllowed)
    }
  }

  function copyPasswordToClipboard() {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 20); // the number of characters you wish to copy
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    generatePass();
  }, [charactersAllowed, numbersAllowed, generatePass, length]);

  return (
    <div className="outer-div">
      Generate Password
      <div className="inner-div">
            <input
            style={{
                border: "none",
                outline: "none",
                padding: "3px",
                borderRadius: "10px",
                width: "200px",
            }}
            type="text"
            readOnly={true}
            value={password}
            ref={passwordRef}
            />
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "4px",
            borderRadius: "5px",
            outline: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={copyPasswordToClipboard}
        >
          copy
        </button>

        <input
          type="range"
          min="8"
          max="16"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <span>Length({length})</span>

        <input
          type="checkbox"
          defaultChecked={numbersAllowed}
          onClick={handleClick}
          name="numbers"
          id="numbers"
        />
        <label htmlFor="numbers">Numbers</label>
        <input
          type="checkbox"
          id="characters"
          defaultChecked={charactersAllowed}
          onClick={handleClick}
          name="characters"
        />
        <label htmlFor="characters">Characters</label>
      </div>
    </div>
  );
}

export default GeneratePassword;
