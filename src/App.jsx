import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Cart from "./Components/CartPage/Cart";
import Product from "./Components/Product/Product";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={ <Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
