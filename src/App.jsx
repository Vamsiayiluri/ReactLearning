import ReactHookForm from "./components/ReactHookForm";

function App() {
  const person = {
    name: "vamsi",
    message: "Hello",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <ReactHookForm></ReactHookForm>
    </div>
  );
}

export default App;
