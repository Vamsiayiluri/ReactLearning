import React, { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

function TemperatureCalculator() {
  const [temperature, setTemperature] = useState({
    celsius: "",
    fahrenheit: "",
  });

  const handleCelsiusChange = (celsius) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    setTemperature({ celsius, fahrenheit: fahrenheit.toFixed(2) });
  };

  const handleFahrenheitChange = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    setTemperature({ celsius: celsius.toFixed(2), fahrenheit });
  };

  return (
    <div>
      <CelsiusInput
        celsius={temperature.celsius}
        onCelsiusChange={handleCelsiusChange}
      />
      <FahrenheitInput
        fahrenheit={temperature.fahrenheit}
        onFahrenheitChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default TemperatureCalculator;
