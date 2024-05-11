import React from "react";
import "./cards.css";
const Cards = ({item, handleClick }) => {
 
  const {  name, price, image } = item;
  return (
    <>
      <div className="cards">
        <div className="image-box">
          <img src={image} alt="img" />
        </div>
        <div className="details">
          <p>{name}</p>
          <p>&#8377; {price}</p>
          <button className="btn-hover" onClick={()=>handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
