import LoopArray from "./components/LoopArray";

function App() {
  const person = {
    name: "vamsi",
    message: "Hello",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <LoopArray />
    </div>
  );
}

export default App;
