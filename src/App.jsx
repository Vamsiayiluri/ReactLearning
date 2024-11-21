import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  const person = {
    name: "vamsi",
    message: "Hello",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <ConditionalComponent />
    </div>
  );
}

export default App;
