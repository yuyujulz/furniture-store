import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Cart from "./pages/Cart"
import AboutUs from "./pages/AboutUs"
import Collection from "./pages/Collection"
import "./index.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
