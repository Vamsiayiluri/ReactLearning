import { useReducer } from "react";

export default function UseReducerTwo() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });

  function reducer(state, action) {
    if (action.type === "increase") {
      return { ...state, count: state.count + state.incrementBy };
    }
    if (action.type === "decrease") {
      return { ...state, count: state.count - state.incrementBy };
    }
    return state;
  }

  return (
    <div>
      Use Reducer: {state.count}
      <button onClick={() => dispatch({ type: "increase" })}>
        Increase state
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>
        Decrease state
      </button>
    </div>
  );
}
