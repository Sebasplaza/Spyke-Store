import React from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { useParams} from 'react-router-dom'
export default function ItemDetail({manga}) {
  const {id}=useParams()
  return (
    <>
    <div className="card " style={{width: "18rem"}}>
    <img src={manga.imagen} className="card-img-top" alt={manga.nombre}/>
   <h1>{manga.nombre}</h1>
   <h1>{manga.precio}</h1>
   </div>
    </>
  )
}
