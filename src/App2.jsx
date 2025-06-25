import React, { useState } from "react";
import "./App2.css";
import useCurrencyInfo from "./currency_converter/hooks/useCurrencyInfo";
import { InputBox } from "./currency_converter/components";

function App2() {
  const [amount, setAmount] = useState(0); // money to be converted
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0); // converted money

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo); // pass this to the InputBox component and use it in dropdown list

  console.log(options)

  const swap = () => {
    // in swap we just interchange the To and From
    setFrom(to);
    setTo(from);
  };

  const convertCurrency = () => {
    // we have to set converted amount state

    // const conversion_factor = currencyInfo[to]
    // let money = amount * conversion_factor

    // setConvertedAmount(money)

    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div>
      <div className="from-inputBox">
        <InputBox
          label="From"
          amount={amount}
          currencyOption={options}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(value) => setAmount(value)}
        />
      </div>
      <button onClick={swap} className="swap-currency">
        Swap
      </button>
      <div className="from-inputBox">
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOption={options}
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
          amountDisable={true}
        />
      </div>

      <button onClick={convertCurrency} className="convert-currency">
        Convert {from} to {to}
      </button>
    </div>
  );
}

export default App2;
