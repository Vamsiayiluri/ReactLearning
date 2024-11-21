import AxiosSample from "./components/AxiosSample";

function App() {
  const person = {
    name: "vamsi",
    message: "Hello",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <AxiosSample></AxiosSample>
    </div>
  );
}

export default App;
