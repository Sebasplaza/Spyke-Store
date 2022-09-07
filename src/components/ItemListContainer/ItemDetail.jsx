import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../Cartcontex";
export default function ItemDetail({ manga }) {
  const { id } = useParams();
  const [andaAlCarrito, setandaAlCarrito] = useState(false);
  const [goToCart, setGoToCart] = useState(false);

  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(manga, quantity);
  };
  return (
    <>
      <div className="container text-center">
        <div className="row ">
          <div className="col-3">
            <img src={manga.imagen} width="300px" className="card-img-center" />
          </div>

          <div className="col-6">
            <h1 className="text-start">{manga.nombre}</h1>
            <h2 className="text-start text-success">${manga.price}</h2>
            <p className="text-start">{manga.descripcion}</p>
            {goToCart ? (
              <Link to="/cart">
                <button type="submit" className="btn btn-primary">
                  Terminar Compra
                </button>
              </Link>
            ) : (
              <ItemCount initial={3} stock={5} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
