import "./App.css";
import { Routes, Route} from 'react-router-dom';

import Cart from "./Components/CartPage/Cart";
import Product from "./Components/Product/Product";
import Checkout from "./Components/CheckoutPage/Checkout";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
