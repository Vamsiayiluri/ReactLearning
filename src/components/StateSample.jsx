import { useState } from "react";

export default function StateSample() {
  const [count, setCount] = useState(0);
  const [IncrementBy, setIncrementBy] = useState(1);
  function incrmentCount() {
    setCount(count + IncrementBy);
  }
  function decrmentCount() {
    setCount(count - IncrementBy);
  }
  function increaseIncrment() {
    setIncrementBy(IncrementBy + 1);
  }
  function decreaseIncrment() {
    setIncrementBy(IncrementBy - 1);
  }

  return (
    <div>
      <h3>Count value is : {count}</h3>
      <button onClick={incrmentCount}>Increment</button>
      <button onClick={decrmentCount}>Decrement</button>

      <h2>We are incrementing value by : {IncrementBy}</h2>
      <button onClick={increaseIncrment}>Increase Increment </button>

      <button onClick={decreaseIncrment}>Decrease Increment </button>
    </div>
  );
}
