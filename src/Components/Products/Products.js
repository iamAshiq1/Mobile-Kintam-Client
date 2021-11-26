import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://mobile-kintam.herokuapp.com/Products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="row my-5 mx-2 align-items-center">
            <h3 style={{color: "#262339"}} className="fw-bold mb-3">
            All Availble Devices
            </h3>
            <hr />
            {
                products.map((product) => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;