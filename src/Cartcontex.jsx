import React, { useContext, useState } from "react";
import Loading from "./components/Loading";
const CartContex = React.createContext([]);
export const useCartContext = () => useContext(CartContex);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((producto) => {
          return producto.id === item.id
            ? { ...producto, quantity: producto.quantity + quantity }
            : producto;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  return (
    <CartContex.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalProducts,
        totalPrice,
        cart,
      }}
    >
      {children}
    </CartContex.Provider>
  );
}
