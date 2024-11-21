import { createContext, useReducer, useState } from "react";

const userContext = createContext();

function UserProvider({ children }) {
  //   const [name, setName] = useState("");
  const [name, dispatch] = useReducer(userReducer, "");
  function userReducer(state, action) {
    if (action.type === "login") {
      return action.payload;
    } else {
      return "Guest";
    }
  }

  return (
    <userContext.Provider value={{ name, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export { userContext, UserProvider };
