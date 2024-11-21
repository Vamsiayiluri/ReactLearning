import Context from "./Context";
import Login from "./Login";
import Logout from "./Logout";

import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Login></Login>
        <Context></Context>
        <Logout></Logout>
      </UserProvider>
    </div>
  );
}

export default App;
