import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Cart from "./pages/Cart"
import AboutUs from "./pages/AboutUs"
import Collection from "./pages/Collection"
import ItemPage from "./pages/ItemPage"
import SignUpLogIn from "./pages/SignupLogin"

import "./index.scss"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/item/:itemId" element={<ItemPage />} />
        <Route path="/signuplogin" element={<SignUpLogIn />} />
      </Routes>
    </div>
  );
}

export default App;
