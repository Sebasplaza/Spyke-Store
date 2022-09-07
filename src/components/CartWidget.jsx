import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "react-bootstrap-icons";
import { useCartContext } from "../Cartcontex";
export default function Carritto() {
  const { totalProducts } = useCartContext();
  return (
    <div className="navbar-brand " size={96} href="#">
      <button>
        <Cart />
      </button>
      <span>{totalProducts() || ""}</span>
    </div>
  );
}
