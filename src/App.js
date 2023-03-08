import React from "react";
import Navbar from "./components/Navbar";
import styles from "./styles.css";
import { ShopProvider } from "./ShopContext";

function App() {
  return (
    <ShopProvider>
      <>
        <Navbar />
      </>
    </ShopProvider>
  );
}

export default App;
