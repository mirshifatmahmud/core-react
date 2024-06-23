import React from 'react';
import '../product/Product.css'

const Product = (props) => {

    console.log(props)

    let {title,category,brand,release_date,status,img,price} = props.product

    return (
        <>
            <div class="card">
                <img src={img} alt="image" style={{ width: '250px' }} />
                <div class="container">
                    <h4><b>Title : {title} </b></h4>
                    <p>Category : {category} </p>
                    <p>Brand : {brand} </p>
                    <p>Release Date : {release_date} </p>
                    <p>Status : {status} </p>
                    <p>Price : {price} </p>
                    <button onClick={()=>props.handleAddProduct(props.product)}>Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Product;