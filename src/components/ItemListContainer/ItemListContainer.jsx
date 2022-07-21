import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ItemListContainer(props) {
  return (
    <>
    <div className="card" style={{width: "18rem"}} >
    <img src={props.imagen} className="card-img-top" alt="chainsaw"/>
    <div className="card-body">
      <h5 className="card-title">{props.nombre}</h5>
      <p className="card-text">{props.tipo}</p>
      <a href="#" className="btn btn-primary">Comprar</a>
    </div>
  </div>
  </>
  )
}
