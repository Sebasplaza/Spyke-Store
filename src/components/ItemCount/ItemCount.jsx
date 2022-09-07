import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ItemCount({ onAdd, stock }) {
  const [count, setCount] = useState(0);

  function sumaDeNumeros() {
    setCount(count + 1);
  }
  function restaDeNumeros() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <div className="d-flex  ">
        <div className="col-4 ">
          <button
            disabled={count === 0}
            onClick={restaDeNumeros}
            className="m-2 btn btn-primary"
          >
            -1
          </button>
        </div>
        <h1 className="m-2">{count}</h1>
        <div className="col-4 ">
          <button
            disabled={count === stock}
            onClick={sumaDeNumeros}
            className="m-2 btn btn-primary"
          >
            +1
          </button>
        </div>
      </div>
      <div className="col-9 p-3">
        <button
          disabled={count === 0}
          onClick={() => onAdd(count)}
          className="btn btn-outline-primary"
        >
          AGRAGAR AL CARRTIO
        </button>
      </div>
    </div>
  );
}
