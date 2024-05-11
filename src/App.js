import "./App.css";
import Navbar from "./components/Navbar/navbar";
import JVRproducts from "./components/JVRProducts/jvrproducts";
import Cart from "./components/Cart/cart";
import { useState } from "react";
function App() {
  const [show, setshow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setwarning] = useState(false);
  const handleClick = (item) => {
    console.log(item);
    // alert('hai');
    let isPrasent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPrasent = true;
    });
    if (isPrasent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2800);
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <>
      <div className="App">
        <Navbar size={cart.length} setshow={setshow} />
        {show ? (
          <JVRproducts handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} />
        )}
        {warning && (
          <div className="warning-msg">Item is already added to your cart</div>
        )}
      </div>
    </>
  );
}

export default App;
