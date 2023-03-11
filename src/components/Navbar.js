import React from "react";
import { NavLink } from "react-router-dom";
import useShop from "../ShopContext";

function Navbar() {
  const { products } = useShop();
  const cartLength = products.length > 0 ? products.length : "";

  return (
    <header className="bg-zinc-900 text-white">
      <div className="flex p-6">
        <h1 className="mr-auto">Playstation Store</h1>
        {/* <div> */}
        {/* <ul> */}
        <nav className="flex space-x-6">
          {/* <li> */}
          <NavLink to="/" className="hover:underline decoration-sky-500">
            Home
          </NavLink>
          {/* </li>
            <li> */}
          <NavLink
            to="/products"
            data-testid="games-link"
            className="hover:underline decoration-sky-500"
          >
            Games
          </NavLink>
          {/* </li>
            <li> */}
          {/* <NavLink to="/contact" className="hover:underline decoration-sky-500">
            Contact
          </NavLink> */}
          {/* </li>
            <li> */}
          <NavLink
            to="/cart"
            data-testid="cart-nav"
            className="hover:underline decoration-sky-500"
          >
            Cart {cartLength}
          </NavLink>
          {/* </li> */}
        </nav>
        {/* </ul> */}
        {/* </div> */}
      </div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> */}
    </header>
  );
}

export default Navbar;
