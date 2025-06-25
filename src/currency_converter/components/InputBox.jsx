// here we are making tamplate of the inputBox , we will pass the arguments and will use it ,ultiple times without writing code for each input box

// currency change is the array of currencies that we will get from the API call response[currency]

// remember the data format of the response of the API call is { "usd" : {} }
import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "inr",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div>
      <label htmlFor="amount">{label} :</label>
      <input
        id="amount"
        type="number"
        value={amount}
        name="Amount"
        placeholder="Amount"
        disabled={amountDisable}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        } // kinda weird syntax na it is done so that the app does not crash if the user does not pass any function
        // why Number(e.target.value) coz js keeps it as a string , but in our case we have to keep it as a number
      />
      <p>Currency Type</p>
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {
          // come to this thing
            currencyOption.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))
        }
      </select>
    </div>
  );
}

export default InputBox;
