import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';

import Cart from "./Components/CartPage/Cart";
import Product from "./Components/Product/Product";
const App = () => {
  return (
    <div className="app">
      <button onClick={Navigate('/products')}>To Product</button>
      <Routes>
        <Route path="/products" element={ <Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
