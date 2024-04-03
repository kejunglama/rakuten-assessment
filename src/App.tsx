import "./App.css";
import Catalog from "./components/Catalog";
import Navbar from "./components/Navbar";

function App() {
  const items = require("./assets/products.json");

  return (
    <div className="App">
      <Navbar />
      <Catalog items={items} />
    </div>
  );
}

export default App;
