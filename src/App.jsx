import FormikSample from "./components/FormikSample";
import Forms from "./components/Forms";
import NewFormikSample from "./components/NewFormikSample";

function App() {
  const person = {
    name: "vamsi",
    message: "Hello",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <Forms></Forms>
      <FormikSample></FormikSample>
      <NewFormikSample></NewFormikSample>
    </div>
  );
}

export default App;
