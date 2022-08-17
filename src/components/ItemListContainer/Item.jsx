import React from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
export default function Item({productos}) {
  return (
    <>
  
 
    <div className="card " style={{width: "18rem"}}>
    <img src={productos.imagen} className="card-img-top" alt={productos.nombre}/>
    <div className="card-body">
      <h5 className="card-title">{productos.nombre}</h5>
      <p className="card-text">{productos.tipo}</p>
      <a href="#" className="btn btn-primary">Comprar</a>
      <Link to={`/mangaDetalles/${productos.id}`} >detalles</Link>
      
    </div>
  </div>
 
  
  </>
  )
}
