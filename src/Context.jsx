import { useContext } from "react";
import { userContext } from "./context/UserContext";

export default function Context() {
  const { name } = useContext(userContext);
  return <div>Hello {name}</div>;
}
