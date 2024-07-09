import "./App.css";
import { Routes, Route, useNavigate } from 'react-router-dom';

import Cart from "./Components/CartPage/Cart";
import Product from "./Components/Product/Product";
const App = () => {
  const navigate  = useNavigate();
  return (
    <div className="app">
      {/* <button onClick={()=>navigate('/products')}>To Product</button> */}
      <Routes>
        <Route path="/" element={ <Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
