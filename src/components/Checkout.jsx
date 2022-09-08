import React, { createContext } from "react";
import { useState } from "react";
import { useCartContext } from "../Cartcontex";
import { addDoc, getFirestore, collection } from "firebase/firestore";
const CartContex = React.createContext([]);
export default function Checkout() {
  const { totalPrice, cart, removeAllProduct } = useCartContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [orderId, setOrderId] = useState("");
  const [totalToPay, setTotalToPay] = useState(totalPrice());
  function validateFrom() {
    const order = {
      buyer: { name, tel, email },
      total: { totalToPay },
      cart,
    };

    const db = getFirestore();
    const ordenes = collection(db, "ordenes");

    addDoc(ordenes, order).then(({ id }) => {
      setOrderId(id);
      removeAllProduct();
    });
  }

  return (
    <>
      {orderId ? (
        "Gracias por tu compra . TU RECIBO ES: " + orderId
      ) : (
        <div>
          <h1>Ingrese sus datos para terminar las compra</h1>
          <form>
            <div className="mb-3 p-3">
              <label for="exampleInputEmail1" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                placeholder="Jorge"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3 p-3">
              <label for="exampleInputPassword1" className="form-label">
                Telefono
              </label>
              <input
                type="tel"
                placeholder="1172789348"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <label className="form-check-label" for="exampleCheck1">
                Email
              </label>
              <input
                type="email"
                placeholder="Jorge"
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
          </form>
          <button onClick={validateFrom} className="btn btn-primary">
            Terminar compra
          </button>
          <h1 className="text-success">Total: ${totalPrice()}</h1>
        </div>
      )}
    </>
  );
}
