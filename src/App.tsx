import React from "react";
import "./App.css";
import Catalog from "./components/Catalog";

function App() {
  const items = require("./assets/products.json");

  return (
    <div className="App">
      <img
        className="App-logo"
        src="https://global.fr.shopping.rakuten.com/wp-content/uploads/2019/08/Recurso-15.svg"
        alt="Rakuten Logo"
      />
      <Catalog items={items} />
    </div>
  );
}

export default App;
