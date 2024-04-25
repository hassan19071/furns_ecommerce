import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CategoryProducts from "./pages/CategoryProducts";
import Contact from "./pages/Contact";
import SearchProducts from "./pages/SearchProducts";
import Login from "./pages/Login";

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/collection/:categoryName" element={<CategoryProducts />} />
        <Route path="/search/:searchWord" element={<SearchProducts />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/signin" element={<Login />}/>
      </Routes>
     </Router>
  );
}

export default App;
