import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function BakeryItem(props){
  const item = props.item
  const add = () =>
  {props.setCart([...props.cart, item]) 
  props.setTotal(props.total+item.price)}
  return(
    <div>
     <img src={item.image} width="200" height="200"/>
    <button onClick={add}>Select</button>
    <div>
      {item.name}
    </div>
    <div>
     {item.price}
    </div>
    <div>
     {item.description}
    </div>
    </div>

  );
}

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  return (
    <div className="App">
      <h1>Mikes Pastries</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>// replace with BakeryItem component
      ))}
      
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.map((item) => (
        <div>{item.name}</div>
      ))
      }
      <div>{total}</div>
      
    </div>
  );
}

export default App;
