import React from 'react';
import '../style/Product.css'

const Product = ({item,handleClick}) => {
    const {title,category,brand,release_date,status,img,price} = item;
    return (
        <section>
            <div className='main'>
            <div class="card">
                <img src={img} alt="image" style={{ width: '250px' }} />
                <div class="">
                    <h4><b>Title : {title} </b></h4>
                    <p>Category : {category} </p>
                    <p>Brand : {brand} </p>
                    <p>Release Date : {release_date} </p>
                    <p>Status : {status} </p>
                    <p>Price : {price} </p>
                    <button onClick={()=>handleClick(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Product;