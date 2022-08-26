import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemLista from './ItemLista';
import {getFirestore, collection, getDocs} from 'firebase/firestore'


export default function ItemListContainer(props) {
 const [productos,setProductos]= useState([]);
  useEffect(()=>{

//1 traer el servicio de firestore
const queryDb = getFirestore();
//2 crear un puntero al dato que queresmos traer
  const  queryCollection = collection(queryDb, 'productos');
//3 trar el dato con una promesa
  getDocs(queryCollection)
  .then(res => setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))

  },[]);
  
    return (
      <>
      <div className="container d-flex m-4">
      <ItemLista productos={productos} />
      
      </div>
      </>
    )
   
   
  
  
}
