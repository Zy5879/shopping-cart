import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import Cart from "./Cart";
import { NavLink, Route, Routes } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1>Fake Store</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default Navbar;
