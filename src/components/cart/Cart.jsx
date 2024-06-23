import React from 'react';

const Cart = (props) => {

    const cart = props.cart
    const total = cart.reduce((total,p)=>total+p.price,0)
    const vat = total/100*1
    let deliveryCost = 0
    if(total >50000){
        deliveryCost=0
    }else if(total > 0 & total <19999){
        deliveryCost=300
    }else if(total > 20000){
        deliveryCost=200
    }

    return (
        <>
            <h4>This is cart</h4>
            <h5>Order Summary : {cart.length}</h5>
            <h5>VAT : {vat}</h5>
            <h5>Delivery Fee : {deliveryCost}</h5>
            <h5>Total : {total+vat+deliveryCost}</h5>
        </>
    );
};

export default Cart;