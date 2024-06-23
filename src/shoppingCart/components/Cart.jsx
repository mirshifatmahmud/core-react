import React, { useState } from 'react';

const Cart = ({cart,setCart}) => {
    const [price,setPrice] =useState(0)
    return (
        <div>
            {
                cart?.map(item=>(
                    <h3>id: {item.id}</h3>
                ))
            }
        </div>
    );
};

export default Cart;