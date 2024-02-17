import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);


  return (
    <header>
      <Link to="/" className="logo">
        <i className="fas fa-utensils"></i>Food
      </Link>

      {/* <div id="menu-bar" className="fas fa-bars"></div> */}

      <nav className="navbar">
        <Link to="/">home</Link>
        <a href="#speciality" className="navbar2">speciality</a>
        <a href="#popular" className="navbar2">popular</a>
        <a href="#review" className="navbar2">review</a>
        <Link className="cart" to="/cart">
          cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
