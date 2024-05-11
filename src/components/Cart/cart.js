import React, { useEffect, useState } from "react";
import "../Cart/cart.css";

const Cart = ({ cart, setCart }) => {
  // Initialize totalPrice state with 0
  const [totalPrice, setTotalPrice] = useState(0);

  // State to keep track of quantities for each item
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    // Calculate total price
    const total = cart.reduce(
      (accumulator, item) =>
        accumulator + item.price * (itemQuantities[item.id] || 1),
      0
    );
    setTotalPrice(total);
  }, [cart, itemQuantities]); 

  
  const handleIncrement = (id) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[id] = (updatedQuantities[id] || 0) + 1;
    setItemQuantities(updatedQuantities);
  };

  const handleDecrement = (id) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[id] = Math.max((updatedQuantities[id] || 1) - 1, 1);
    setItemQuantities(updatedQuantities);
  };

  // Function to handle item removal
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    const updatedQuantities = { ...itemQuantities };
    delete updatedQuantities[id];
    setCart(updatedCart);
    setItemQuantities(updatedQuantities);
  };

  return (
    <div className="cartpage">
      {cart.map((item) => (
        <div className="cart-boxes" key={item.id}>
          <div className="cart-img">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
          <div className="right-cart">
            <div className="buttonsPlus">
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <button className="numbers">
                {itemQuantities[item.id] || 1}
              </button>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
            <div className="remove-btn">
              <span>&#8377; {item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <span>Total Price of your Cart</span>
        {/* Display the totalPrice */}
        <span className="totalamount">&#8377; {totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
