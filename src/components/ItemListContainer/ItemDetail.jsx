import React, { useState } from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { useParams} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({manga}) {
  const {id}=useParams()
  const [andaAlCarrito, setandaAlCarrito] = useState(false);
  const [goToCart, setGoToCart]= useState(false);
  const onAdd =(quantity) =>{
 setGoToCart(true);
  }
  return (
    <>
    <div className="card " style={{width: "18rem"}}>
    <img src={manga.imagen} className="card-img-top" alt={manga.nombre}/>
   <h1>{manga.nombre}</h1>
   <h1>{manga.precio}</h1>
   {
goToCart
? <Link to='/cart'>Terminar Compra</Link>
: <ItemCount initial={3} stock={5} onAdd={onAdd}/>

   }

   </div>
   
    </>
  )
}
