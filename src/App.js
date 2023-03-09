import React from "react";
import Navbar from "./components/Navbar";
// import Products from "./components/Products";
// import Home from "./components/Home";
// import Cart from "./components/Cart";
// import Contact from "./components/Contact";
// import { Route, Routes } from "react-router-dom";
import RouteProvider from "./components/Routes";
import styles from "./styles.css";
import { ShopProvider } from "./ShopContext";

function App() {
  return (
    <ShopProvider>
      <Navbar />
      <main className="relative">
        <RouteProvider />
      </main>
    </ShopProvider>
  );
}

export default App;
