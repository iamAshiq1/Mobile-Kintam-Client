import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Flip from 'react-reveal/Flip';

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mobile-kintam.herokuapp.com/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="row mx-1 my-5">
      <h5 style={{color: "tomato"}} className="mt-2 fw-bold mb-3">Choose your Product</h5>
            <h2 style={{color: "#262339"}} className="fw-bold mb-3">
            Latest Update Devices
            </h2>
        {products.slice(0, 6).map((product) => (
          <Flip left>
          <div className="col-lg-2 col-md-4 col-6 my-4" key={product._id}>
            <img width='100%' src={product?.img} alt=""/>
            <h6 className='fw-bold mt-2'>{product?.name} </h6>
            <p className='text-decoration-underline text-danger fw-bold'>
              {product?.price}
            </p>
            <Link to={`/Details/${product?._id}`}>
                  <Button
                    className="btn py-1 px-2 btn-outline-primary"
                    variant="primary">
                    Buy Now
                  </Button>
                </Link>
          </div>
          </Flip>
        ))}
      </div>
      <Link to="/Products">
        <Button
          className="btn py-1 px-2 text-decoration-underline fw-bolder"
          variant="primary">LOAD MORE <i className="fas fa-angle-double-right"></i>
        </Button>
      </Link>
    </>
  );
};

export default HomeProducts;
