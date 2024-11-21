import EventHandling from "./components/EventHandling";

function App() {
  const person = {
    name: "vamsi",
    message: "Hello",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <EventHandling />
    </div>
  );
}

export default App;
