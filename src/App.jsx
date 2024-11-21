import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import UseReducerTwo from "./components/UseReducerTwo";
import Nav from "./Nav";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Products from "./pages/Products";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
  const person = {
    name: "vamsi",
    message: "Hello",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
