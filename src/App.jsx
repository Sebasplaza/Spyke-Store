import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Cart from "./components/ItemListContainer/Cart";

import CartProvider from "./Cartcontex";
import Loading from "./components/Loading";
import Checkout from "./components/Checkout";
import Fotter from "./components/Fotter";
function App({ productos }) {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route
            path="/mangaDetalles/:id"
            element={<ItemDetailContainer productos={productos} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
        <Fotter />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
