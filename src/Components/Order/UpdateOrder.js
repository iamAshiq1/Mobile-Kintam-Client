/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateOrder = () => {
    const [order, setOrder] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://mobile-kintam.herokuapp.com/Orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);

    const handleOrderStatus = e => {
        const updatedStatus = e.target.value;
        const updatedOrder = { status: updatedStatus, name: order.productName };
        setOrder(updatedOrder);
    }

    const handleUpdateOrder = e => {
        const url = `https://mobile-kintam.herokuapp.com/Orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                    alert('Update Successful');
                    setOrder({});
                    e.target.reset();
                
            })
        e.preventDefault();
    }


    return (
        <div className='mt-5'>
            <form onSubmit={handleUpdateOrder}>
                <p className='fw-bold'> Update Order Status</p>
                <input type="text" className='w-50 py-1' onChange={handleOrderStatus} value={order.status || ''}/>              
                <input className="ms-2 mb-1 btn btn-success" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrder;