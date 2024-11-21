import React from "react";

const FilteredList = React.memo(({ filterItems }) => {
  console.log("FilteredList rendered");
  return (
    <ul>
      {filterItems().map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

export default FilteredList;
