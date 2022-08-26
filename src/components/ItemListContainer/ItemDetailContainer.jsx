import React, {useState, useEffect}from 'react'
import { useParams, Link} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getFirestore, doc, getDoc} from 'firebase/firestore'
export default function ItemDetailContainer({productos}) {

const {id}=useParams()




const [manga,setmanga]= useState([]);




  useEffect(()=>{
    
 //1 traer el servicio de firestore
    const queryDb = getFirestore();
  //2 crear un puntero al dato que queresmos traer
    const  queryDoc = doc(queryDb, 'productos', id);
  //3 trar el dato con una promesa
    getDoc(queryDoc)
    .then(res => setmanga({id: res.id, ...res.data()}))

  },[id]);

  return (
  
    <>
    
        
    <ItemDetail key={manga.id}manga={manga}/>

    </> 
  
  )
}
