import React, {useState, useEffect}from 'react'
import { useParams, Link} from 'react-router-dom'
import ItemDetail from './ItemDetail'
export default function ItemDetailContainer({productos}) {

const {id}=useParams()




const [manga,setmanga]= useState([]);
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
      res(productosObj.find((e)=> e.id == id))
      }, 2000)
    });
  
  
    promesaProductos.then((res) => {
      setmanga(res);
    })
  },[id]);

  return (
  
    <>
    
        
    <ItemDetail key={manga.id}manga={manga}/>

    </> 
  
  )
}
