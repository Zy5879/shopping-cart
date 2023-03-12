import Products from "./Products";
import Home from "./Home";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";

function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" data-testid="id1" element={<Cart />} />
    </Routes>
  );
}

export default RouteProvider;
