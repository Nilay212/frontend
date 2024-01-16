import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop.jsx"
import Product from './Pages/Product.jsx'
import Cart from "./Pages/Cart.jsx"
import LoginSignup from "./Pages/LoginSignup.jsx"
import ShopCategory from "./Pages/ShopCategory.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/mens" element={<ShopCategory category = 'men'/>}></Route>
        <Route path="/womens" element={<ShopCategory category = 'women'/>}></Route>
        <Route path="/mens" element={<ShopCategory category = 'kids'/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path=":productId" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<LoginSignup/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
