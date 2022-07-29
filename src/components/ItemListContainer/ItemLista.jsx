import React from 'react'
import Item from './Item'

export default function ItemLista({productos} ) {
  return (

<>
{productos.map((productos)=>(
    <Item   key={productos.id}  productos={productos}/>
))}
</>
  )
  
}
