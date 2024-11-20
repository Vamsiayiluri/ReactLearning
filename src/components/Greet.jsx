import React from "react";

function Greet({ person }) {
  return (
    <div>
      <h1>
        {person.message} {person.name} {person.seatNumbers}!
      </h1>
    </div>
  );
}

export default Greet;
