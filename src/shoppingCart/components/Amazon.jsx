import React from 'react';
import list from '../assets/data'
import '../style/Amazon.css'
import Product from './Product';




const Amazon = ({handleClick}) => {
    return (
        <div>
            <section>
            {
                list.map(item=> <Product item={item} handleClick={handleClick} ></Product>)
            }
            </section>
        </div>
    );
};

export default Amazon;