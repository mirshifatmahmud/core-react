import React, { useState } from 'react';
import fakeData from '../../assets/fakeData.json'
import './Shop.css'
import Product from '../product/Product';
import Cart from '../cart/Cart';

const Shop = () => {

    const [product, setProduct] = useState(fakeData)
    const [cart, setCart] = useState([])

    const handleAddProduct = (x) => {
        console.log('add product',x)
        const newCart = [...cart,x]
        setCart(newCart)
    }


    return (
        <>
            <div className="main-container">
                <div className="product">
                    {
                        product.map(x => <Product
                            key={x.id}
                            product={x}
                            handleAddProduct={handleAddProduct}
                        ></Product>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;