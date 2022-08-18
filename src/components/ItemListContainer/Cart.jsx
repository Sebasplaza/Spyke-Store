import React from 'react'
import {Link} from "react-router-dom";
import { useCartContext } from '../../Cartcontex'
import ItemCart from '../ItemCart/ItemCart';
export default function Cart() {
  const {cart, totalPrice}=useCartContext();
 if (cart.length === 0) {
  return (
    <>
    <p>aqui no hay mangas</p>
    <Link to='/' className="btn btn-primary" >hacer compras</Link>
    </>
  );
 }
 
  return (
   <>
   {
    cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
   }
   <p>
    total: {totalPrice()}
   </p>
   </>
  )
}
