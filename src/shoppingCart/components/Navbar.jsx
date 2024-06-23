import React from 'react';
import '../style/Navbar.css'

const Navbar = ({size,setShow}) => {
    return (
        <div>
            <div className="container">
                <div className="logo">
                    <h4 onClick={()=>setShow(true)}>MY SHOP</h4>
                </div>
                <div className="cart">
                    <button onClick={()=>setShow(false)}><i className='fa fa-shopping-cart'></i> Cart <strong>{size}</strong></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;