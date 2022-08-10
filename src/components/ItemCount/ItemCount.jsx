import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ItemCount({onAdd , stock}) {


const[count, setCount] = useState(true);
function sumaDeNumeros(){
  setCount( count + 1)
}
function restaDeNumeros(){
  setCount(count - 1)
}
  return (
    <div className="container">
    <div className="d-flex m-5 ">
        <button disabled={count === 0} onClick={restaDeNumeros} className="m-2">-1</button>
        <h1 className="m-2">{count}</h1>
        <button disabled={count === stock} onClick={sumaDeNumeros} className="m-2">+1</button>
        <button disabled={ stock <= 0} onClick={()=> onAdd(count)}>AGRAGAR AL CARRTIO</button>
    </div>
    </div>
  )
}
