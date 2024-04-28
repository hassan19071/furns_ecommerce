import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CategoryProducts from "./pages/CategoryProducts";
import Contact from "./pages/Contact";
import SearchProducts from "./pages/SearchProducts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import NoPageFounded from "./pages/NoPageFounded";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/collection/:categoryName"
          element={<CategoryProducts />}
        />
        <Route path="/search/:searchWord" element={<SearchProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/account" element={<Dashboard />} />
        <Route path="/product/:productName" element={<ProductDetails />} />
        <Route path="*" element={<NoPageFounded />} />
      </Routes>
    </Router>
  );
}

export default App;
