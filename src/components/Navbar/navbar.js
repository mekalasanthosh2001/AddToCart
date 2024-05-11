import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
const Navbar = ({ size, setshow }) => {
  return (
    <>
      <nav>
        <div className="navbar">
          <h2 className="logo" onClick={() => setshow(true)}>
            my products
          </h2>

          <div className="cart-icon" onClick={() => setshow(false)}>
            <span>
              <FaShoppingCart />
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
