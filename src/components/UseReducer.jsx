import { useState, useReducer } from "react";

export default function UseReducer() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === "increase") {
      return state + action.payload;
    }
    if (action.type === "decrease") {
      return state - action.payload;
    }
    return state; // Ensure state is returned for unhandled actions
  }

  return (
    <div>
      UseState: {count}
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={() => setCount(count - 1)}>Decrease count</button>
      Use Reducer: {state}
      <button onClick={() => dispatch({ type: "increase", payload: 1 })}>
        Increase state
      </button>
      <button onClick={() => dispatch({ type: "decrease", payload: 1 })}>
        Decrease state
      </button>
    </div>
  );
}
