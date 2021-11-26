import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://mobile-kintam.herokuapp.com/Orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

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
            alert("Deleted successfully");
            const remainingUsers = orders.filter((user) => user._id !== id);
            setOrders(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="text-center">
      <h3 className="mt-3">Total Orders: {orders.length}</h3>
      <hr />
      <ul>
        {orders.map((user) => (
          <li className="fw-bold my-4 me-5" key={user._id}>
            Name: <span> {user?.name} </span> || Product:
            <span> {user?.productName} </span> ---
            <span className='text-primary'> {user?.status}</span>
            <Link to={`/Order/Update/${user._id}`}>
              <button className="btn btn-outline-success mx-2 px-2 py-1">
                Update
              </button>
            </Link>
            <button
              className="btn btn-outline-danger px-2 py-1"
              onClick={() => handleDeleteUser(user._id)}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageOrders;
