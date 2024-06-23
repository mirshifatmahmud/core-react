import React, { useState } from 'react';
import './App.css';
import Navbar from './shoppingCart/components/Navbar';
import Amazon from './shoppingCart/components/Amazon';
import Cart from './shoppingCart/components/Cart';

function App() {

  const [show,setShow]=useState(false)
  const [cart,setCart]=useState([])

  const handleClick =(item)=>{
    setCart([...cart,item])
  }

  return (
    <>
      <React.Fragment>
        <Navbar size={cart.length} setShow={setShow} />
        {
          show?<Amazon handleClick={handleClick}/>:<Cart cart={cart} setCart={setCart}/>
        }
      </React.Fragment>
    </>
  );
}

export default App;
