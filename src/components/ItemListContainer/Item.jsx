import React from 'react'

export default function Item({productos}) {
  return (
    <>
  
   
    <div className="card" style={{width: "18rem"}} >
    <img src={productos.imagen} className="card-img-top" alt="chainsaw"/>
    <div className="card-body">
      <h5 className="card-title">{productos.nombre}</h5>
      <p className="card-text">{productos.tipo}</p>
      <a href="#" className="btn btn-primary">Comprar</a>
    </div>
  </div>
  </>
  )
}
