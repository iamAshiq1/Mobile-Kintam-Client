/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Fade from 'react-reveal/Fade';

const Order = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://mobile-kintam.herokuapp.com/Orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const orders = order.filter((or) => or.email === user.email);
  console.log(orders);

  // DELETE AN USER
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://mobile-kintam.herokuapp.com/Orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = order.filter((user) => user._id !== id);
            setOrder(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="text-center my-5">
      <h2 className="mt-5 pt-3 fw-bolder text-success">
        My Order Informations
      </h2>

      <hr className="mb-5" />

      <div className="row mx-5 gap-5 justify-content-center">
        {orders.map((ord) => ( 
          <Fade>
            <div style={{
            backgroundImage:
              `linear-gradient(rgba(5, 10, 30, 0.7), rgba(5, 10, 30, 0.7)), url(${ord.img})`,
            backgroundRepeat: "no-repeat",
            height: "35vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow: "3px 3px 15px gray", borderRadius: "10px"
          }}
            className="col-lg-3 py-2">
            <h6 style={{color: "violet"}} className="mt-4">
              <i className="far fa-user"></i> {ord?.name}
            </h6>
            <h6 className='text-success'>
              <i className="fas fa-mobile"></i> {ord?.productName}
            </h6>
            <h6 className="text-danger">
               <i className="fas fa-money-check-alt"></i> {ord?.price}
            </h6>
            <p className='text-info'>Your Order is {ord?.status}</p>
            <button
              className="btn btn-outline-light py-1 px-2"
              onClick={() => handleDeleteUser(ord._id)}
            >
              Cancel
            </button>
          </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Order;
