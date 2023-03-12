import React from "react";
import Navbar from "./components/Navbar";
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
