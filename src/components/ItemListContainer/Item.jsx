import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function Item({ productos }) {
  return (
    <>
      <div className="container grid">
        <div className="card " style={{ width: "18rem" }}>
          <Link to={`/mangaDetalles/${productos.id}`}>
            <img
              src={productos.imagen}
              className="card-img-top"
              alt={productos.nombre}
            />
          </Link>
          <div className="card-body ">
            <h5 className="card-title">{productos.nombre}</h5>
            <p className="card-text">{productos.tipo}</p>
            <Link
              to={`/mangaDetalles/${productos.id}`}
              className="btn btn-primary "
            >
              Detalles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
