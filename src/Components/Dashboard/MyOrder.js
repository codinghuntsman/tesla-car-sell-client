import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);

    // এখান থেকে ডায়নামিকভাবে ইউজার এর ইমেইল নিয়ে বুকিং এ পি আই এর মাধ্যমে সার্ভারে পাঠিয়েছি।
    // একক ইউসারের একক বুকিং পাওয়ার জন্য।
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrders(data))
        }
    }, [user]);


    //-----------Delete a users order from database----------
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myOrders.filter(order => order._id !== id);
                        setMyOrders(remaining)
                    }
                });
        };
    };


    return (
        <div className='overflow-x-auto'>
            <p className='pl-10'>Total Booking:{myOrders.length}</p>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Country</th>
                        <th>Current Location</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                {/*---------------------Dashboard of user------------------*/}
                <tbody>
                    {
                        myOrders.map((order, index) => <tr className='hover'>
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.quantity}</td>
                            <td>{order.country}</td>
                            <td>{order.location}</td>
                            <td>{order.phone}</td>
                            <td>
                                <button onClick={() => handleDelete(order._id)} key={order._id} className="btn btn-xs text-pink-500"><Link className='hover:text-red-600' to="">Cancel Order</Link></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyOrder;