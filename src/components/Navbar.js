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
        <nav className="flex space-x-6">
          <NavLink to="/" className="hover:underline decoration-sky-500">
            Home
          </NavLink>

          <NavLink
            to="/products"
            data-testid="games-link"
            className="hover:underline decoration-sky-500"
          >
            Games
          </NavLink>

          <NavLink
            to="/cart"
            data-testid="cart-nav"
            className="hover:underline decoration-sky-500"
          >
            Cart {cartLength}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
