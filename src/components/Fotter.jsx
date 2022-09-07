import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
export default function Fotter() {
  return (
    <>
      <footer className=" footer">
        <div className="text-center p-3">
          <NavLink className="navbar-brand " to="/">
            SPYKE STRORE
          </NavLink>
        </div>
      </footer>
    </>
  );
}
