import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://mobile-kintam.herokuapp.com/Users')
        .then(res => res.json())
        .then(data => setUsers(data))
        
    },[])


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://mobile-kintam.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <>
        <div className='my-5'>
            <h3 className='fw-bold'>Make an Admin</h3>
            
            <form className='my-5' onSubmit={handleAdminSubmit}>
                <input className='w-50 py-1'
                    type="email"
                    placeholder='Enter Email'
                    onBlur={handleOnBlur} required/>
                <button type="submit" className='btn btn-success mb-1 ms-2 px-1 py-1'>Make Admin</button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
        <h4>Users Email</h4>
        <hr />
        <ol className='row mt-5 mx-1'>
            {
                users.map((user) => (
                    <li key={user._id} className='col-lg-3 my-2 col-md-4 col-12 fw-bolder text-success'>
                      [ {user?.email} ]
                    </li>
                ))
            }
        </ol>
        </>
    );
};

export default MakeAdmin;