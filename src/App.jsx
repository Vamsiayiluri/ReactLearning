import TemperatureCalculator from "./components/temperatureCalculator";

function App() {
  const person = {
    name: "vamsi",
    message: "Hello",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <TemperatureCalculator></TemperatureCalculator>
    </div>
  );
}

export default App;
