import { useContext } from "react";
import { userContext } from "./context/UserContext";

export default function Login() {
  const { dispatch } = useContext(userContext);
  function logOut() {
    dispatch({ type: "logout" });
  }
  return (
    <div>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
}
