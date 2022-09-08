import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Cartcontex";
import ItemCart from "../ItemCart/ItemCart";
export default function Cart() {
  const { cart, totalPrice } = useCartContext();
  if (cart.length === 0) {
    return (
      <>
        <div className="container d-flex m-1 text-center">
          <h1>No veo ningun manga en el carrito</h1>
        </div>

        <Link to="/" className="btn btn-primary m-4 text-center">
          hacer compras
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="container d-flex m-4">
        {cart.map((producto) => (
          <ItemCart key={producto.id} producto={producto} />
        ))}
      </div>
      <div className="p-5 container d-flex m-4 text-center">
        <h1>Total: </h1>
        <div>
          <h1 className="text-start text-success"> ${totalPrice()}</h1>
        </div>
        <Link to="/checkout">
          {" "}
          <button className="btn btn-outline-primary m-2">
            Confirmar datos
          </button>
        </Link>
      </div>
    </>
  );
}
