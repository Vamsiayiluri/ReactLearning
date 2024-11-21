import React from "react";

function FahrenheitInput({ fahrenheit, onFahrenheitChange }) {
  return (
    <div>
      <label>Temperature in Fahrenheit: </label>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(e.target.value)}
      />
    </div>
  );
}

export default FahrenheitInput;
