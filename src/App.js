import React, { useState } from "react";
import Navbar from "./components/Navbar";
import styles from "./styles.css";
import { ShopProvider } from "./ShopContext";

function App() {
  // const [cart, setCart] = useState(0);
  // const [cartItems, setCartItems] = useState([]);
  return (
    <ShopProvider>
      <>
        <Navbar />
      </>
    </ShopProvider>
  );
}

export default App;
