import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight, Cart, CartDash } from 'react-bootstrap-icons';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      <a className="navbar-brand text-light" href="#">Navbar</a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Comics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Mangas</a>
          </li>
         
        </ul>
      </div>
     <CartWidget/>
    </div>
  </nav>
  )
}

export default Navbar