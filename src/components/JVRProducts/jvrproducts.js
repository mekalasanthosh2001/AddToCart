import React from "react";
import data from "../../data/data";
import Cards from "../cards/cards";
const JVRproducts = ({handleClick}) => {
  return (
    <>
      <section>
        {data.map((item) => (
          <Cards item={item} key={item.id} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default JVRproducts;
