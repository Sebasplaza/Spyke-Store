import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemLista from './ItemLista';



export default function ItemListContainer(props) {
 const [productos,setProductos]= useState([]);
  useEffect(()=>{
    let productosObj = 
    [{
      id:1,
      nombre:"Chain saw",
      imagen:"https://images-na.ssl-images-amazon.com/images/I/81s8xJUzWGL.jpg",
      tipo:"Manga",
      precio:1750},
      {
      id:2,
      nombre:"One punch",
      imagen:"https://i.pinimg.com/736x/3c/0a/05/3c0a05fa6e0295b95f741352c342143a--le-lien-one-punch-man-manga.jpg",
      tipo:"Manga",
      precio:2750},
      {
      id:3,
      nombre:"Monster",
      imagen:"https://images.cdn2.buscalibre.com/fit-in/360x360/50/8a/508ae8657ccd59f01f0e438050ea4ce8.jpg",
      tipo:"Manga",
      precio:750},
    ];
    
    const promesaProductos = new Promise((res,rej)=>{
      setTimeout(() => {
      res(productosObj)
      }, 2000)
    });
  
  
    promesaProductos.then((res) => {
      setProductos(res);
    })
  },[]);
  
    return (
      <>
      <div className="container d-flex m-4">
      <ItemLista productos={productos} />
      <h1>{productos.id}</h1>
      </div>
      </>
    )
   
   
  
  
}
