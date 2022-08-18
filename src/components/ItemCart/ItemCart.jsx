import React from 'react'
import { useCartContext } from '../../Cartcontex'

export default function ItemCart({producto}) {
    const {removeProduct,}=useCartContext();
  return (
    <>
    <div className="card " style={{width: "18rem"}}>
    <img src={producto.imagen} className="card-img-top"/>
   <h1>{producto.nombre}</h1>
   <h1>${producto.precio}</h1>
   <h1>Subtotal: {producto.quantity * producto.precio}</h1>
<button onClick={() => removeProduct(producto.id)} className="btn btn-primary" > Eliminar</button>
   </div>
   
    </>
  )
}
