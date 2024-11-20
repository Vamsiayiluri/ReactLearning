// import reactLogo from "./assets/react.svg";
// import "./App.css";
// import Forms from "./components/Forms";
// import InlineComponent from "./components/InlineCOmponent";
// import OutlineComponent from "./components/OutlineComponent";
// import StateSample from "./components/StateSample";
// import EventHandling from "./components/EventHandling";
import Greet from "./components/Greet";
// import LoopArray from "./components/LoopArray";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import UseReducerTwo from "./components/UseReducerTwo";
import Nav from "./Nav";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Products from "./pages/Products";

import { useState } from "react";
import Context from "./Context";
import Login from "./Login";
import Logout from "./Logout";

import { UserProvider } from "./context/UserContext";
import TemperatureCalculator from "./components/temperatureCalculator";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FormikSample from "./components/FormikSample";
import NewFormikSample from "./components/NewFormikSample";
import ReactHookForm from "./components/ReactHookForm";
import AxiosSample from "./components/AxiosSample";
import PreDefinedHooks from "./components/PreDefinedHooks";
import ClassLifeCycleMethods from "./components/ClassLifeCycleMethods";

// import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  const person = {
    name: "vamsi",
    message: "Hello",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <Greet person={person} />
      {/* <LoopArray /> */}
      {/* <ConditionalComponent /> */}
      {/* <EventHandling /> */}
      {/* <StateSample /> */}
      {/* <Forms /> */}
      {/* <InlineComponent />
      <OutlineComponent /> */}

      {/* <UseReducer /> */}
      {/* <UseReducerTwo /> */}
      {/* <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="settings" element={<Settings></Settings>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
          </Route>
          <Route path="/products/:id" element={<Products></Products>}></Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter> */}
      {/* <UserProvider>
        <Login></Login>
        <Context></Context>
        <Logout></Logout>
      </UserProvider> */}
      {/* <TemperatureCalculator></TemperatureCalculator> */}
      {/* <FormikSample></FormikSample> */}
      {/* <NewFormikSample></NewFormikSample> */}
      {/* <ReactHookForm></ReactHookForm> */}
      {/* <AxiosSample></AxiosSample> */}
      {/* <PreDefinedHooks></PreDefinedHooks> */}
      {/* <ClassLifeCycleMethods></ClassLifeCycleMethods> */}
    </div>
  );
}

export default App;
