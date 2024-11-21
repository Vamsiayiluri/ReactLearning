import React, { useCallback, useMemo, useRef, useState } from "react";
import FilteredList from "./FilteredList";

export default function PreDefinedHooks() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const computedValue = useMemo(() => ExpensiveCalculation(num), [num, count]);

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    // setItems([]);
  };
  function ExpensiveCalculation(num) {
    console.log("Calculating...");
    return num * 2;
  }

  // Memoizing the filter function using useCallback
  const filterItems = useCallback(() => {
    console.log("cchecking");
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
      <p>Computed Value: {computedValue}</p>
      <p>Number Value: {num}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setNum(num + 1)}>Increment Number</button>

      <div>
        <h1>UseCallback Example</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items"
        />
        <FilteredList filterItems={filterItems} />
      </div>
    </div>
  );
}
