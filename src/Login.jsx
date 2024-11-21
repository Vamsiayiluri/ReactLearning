import { useContext, useState } from "react";
import { userContext } from "./context/UserContext";

export default function Login() {
  const [value, setValue] = useState("");

  const { dispatch } = useContext(userContext);
  function submitFunction(e) {
    console.log("hi");
    e.preventDefault();
    dispatch({ type: "login", payload: value });
  }
  return (
    <div>
      <form onSubmit={submitFunction}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
