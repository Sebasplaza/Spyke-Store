import React from "react";
import { useCartContext } from "../../Cartcontex";

export default function ItemCart({ producto }) {
  const { removeProduct } = useCartContext();
  return (
    <>
      <div className="card " style={{ width: "18rem" }}>
        <img src={producto.imagen} className="card-img-top" />
        <h1>{producto.nombre}</h1>
        <h1 className="text-start text-success">${producto.price}</h1>
        <h1>Cantidad: {producto.quantity}</h1>

        <h1>Subtotal:</h1>
        <h1 className="text-start text-success">
          ${producto.quantity * producto.price}
        </h1>
        <button
          onClick={() => removeProduct(producto.id)}
          className="btn btn-primary"
        >
          {" "}
          Eliminar
        </button>
      </div>
    </>
  );
}
