import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ItemCount() {
const [numero, setNumero] = useState(0);
const stock = 20
function sumaDeNumeros(){
    setNumero(numero + 1)
}
function restaDeNumeros(){
    setNumero(numero - 1)
}
  return (
    <div className="container">
    <div className="d-flex m-5 ">
        <button disabled={numero === 0} onClick={restaDeNumeros} className="m-2">-1</button>
        <h1 className="m-2">{numero}</h1>
        <button disabled={numero === stock} onClick={sumaDeNumeros} className="m-2">+1</button>
    </div>
    </div>
  )
}
