import { useState } from "react";

export default function Forms() {
  const [name, setName] = useState("enter name");
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
  function callFunction(e) {
    e.preventDefault();
    console.log(fullName, "name");
  }
  return (
    <div>
      {fullName.firstName}-{fullName.lastName}
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={fullName.firstName}
          onChange={(e) =>
            setFullName({ ...fullName, firstName: e.target.value })
          }
        ></input>
        <input
          type="text"
          value={fullName.lastName}
          onChange={(e) =>
            setFullName({ ...fullName, lastName: e.target.value })
          }
        ></input>
        <button onClick={(e) => callFunction(e)}>Add</button>
      </form>
    </div>
  );
}
