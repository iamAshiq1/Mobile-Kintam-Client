/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Bounce from 'react-reveal/Bounce';

const Details = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    const { user } = useAuth();
    const placeRef = useRef()

  useEffect(() => {
    fetch(`https://mobile-kintam.herokuapp.com/Products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);


  const handleAddOrder = (e) => {
    const name = user.displayName;
    const email = user.email;
    const price = product.price;
    const img = product.img;
    const productName = product.name;
    const status = "pending";
    const place = placeRef.current.value;
    const newOrder = { name, email, price, img, productName, status, place };

    fetch("https://mobile-kintam.herokuapp.com/Orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the Order.");
          e.target.reset()
        }
      });
    e.preventDefault();
  };

    return (
      <div>
        <div className='row justify-content-center mx-1'>
            <h3 className='fw-bolder mt-3'>Place Order</h3>
            <hr />
            <Bounce>
           <div className="col-lg-4 col-10 mt-5">
               <h4>{product?.name}</h4>
               <img
                 style={{ borderRadius: "10px" }}
                 width="100%"
                 src={product?.img}
                 alt=""/>
            </div>
            </Bounce>
            <Bounce>
            <div className='col-lg-5 col-11 mx-5 my-5' style={{textAlign: 'left'}}>
                <h3 className='fw-bold mt-5'>Details: </h3>
                <hr />
                <p>{product?.description}</p>
                <input type="radio" checked/> Cash On delivery <br />
                <br />
                <h5 className='text-success mb-4 fw-bold'>{product?.price}</h5>
              <form onSubmit={handleAddOrder}>
                 <input
                     placeholder="Enter your Location"
                     style={{ border: "2px solid lightsteelblue" }}
                     type="text"
                     required
                     className="px-2 py-1 rounded w-100"
                     ref={placeRef}
                   /> <br />
                 <input type="submit" className='btn btn-danger py-1 mt-3' value="BUY NOW" />              
              </form>
                  
            </div>
            </Bounce>
        </div>
    </div>
    );
};

export default Details;