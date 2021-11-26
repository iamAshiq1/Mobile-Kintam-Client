import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://mobile-kintam.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  
    // DELETE AN USER
    const handleDeleteProduct = (id) => {
      const proceed = window.confirm("Are you sure, you want to delete?");
      if (proceed) {
        const url = `https://mobile-kintam.herokuapp.com/products/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              alert("Deleted successfully");
              const remainingUsers = products.filter((user) => user._id !== id);
              setProducts(remainingUsers);
            }
          });
      }
    };
    return (
        <div className="text-center row mx-1">
    <h5 className='my-3 fw-bolder'><span> <Link className="link w-25 me-3 fs-6 text-decoration-none bg-success text-light" to="/AddProduct">
                Add Product
              </Link>
      </span>Total Product: {products.length} </h5>
      <hr />

        {products.map((product) => (
            <div className='col-lg-2 col-6 my-4' key={product._id}>
            <img width='50%' src={product?.img} alt=""/>
            <p> {product?.name} </p>
            
            <button
              className="btn btn-outline-danger px-2 py-0"
              onClick={() => handleDeleteProduct(product._id)}>
              X
            </button>

         
          </div>
        ))}

    </div>
    );
};

export default ManageProducts;