import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Purchase = () => {

    //------------Get a single product from database-------------
    const { id } = useParams();
    const [users, setUsers] = useState({});

    useEffect(() => {
        fetch(`https://powerful-brushlands-68038.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    //-------------Post method from here------------------
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handlePurchase = (event) => {
        event.preventDefault();
        const country = event.target.country.value;
        const location = event.target.location.value;
        const phone = event.target.number.value;
        const quantity = event.target.quantity.value;
        const purchaseInfo = {
            name: user.displayName,
            email: user.email,
            country: country,
            location: location,
            phone: phone,
            quantity: quantity,
        };

        //----(create order)Post method or create method-----------------
        fetch('https://powerful-brushlands-68038.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Your order han been completed");
                }
                navigate("/");
            });
    };
    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-2 gap-4 mt-3'>
            <div className="card bg-base-100 shadow-xl py-3">
                <figure>
                    <img className='rounded-md' src={users.img} alt="Album" />
                </figure>
                <div className="pl-10 mt-2">
                    <h2 className="text-accent text-sm lg:text-xl font-bold font-sans"><span>{users.name}</span></h2>
                    <p className='font-sans text-black'><span className='text-black font-bold font-sans'>quantity:</span> {users.quantity}</p>
                    <p className='font-sans text-black'><span className='text-black font-bold font-sans'>available:</span> {users.available}</p>
                    <p className='font-sans text-black'><span className='text-black font-bold font-sans'>engine:</span> <span className='font-bold text-orange-500'>$</span> {users.engine}</p>
                    <div className='flex justify-end container'>
                        <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md btn-accent text-black"><Link to="/">HOME</Link></button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl py-3">
                <h2 className='text-center text-pink-500 text-xs md:text-md lg:text-xl font-extrabold font-sans'>PLEASE FILL OUT THE FORM AND PLACE THE ORDER</h2>
                <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                    <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered input-accent w-full max-w-xs font-bold" />
                    <input type="text" name="email" disabled value={user?.email} className="input input-bordered input-accent w-full max-w-xs font-bold" />
                    <input type="text" name="country" placeholder="Your country" className="input input-bordered input-accent w-full max-w-xs font-bold placeholder:text-black" required />
                    <input type="text" name="location" placeholder="Current location" className="input input-bordered input-accent w-full max-w-xs font-bold placeholder:text-black" required />
                    <input type="text" name="number" placeholder="Phone number" className="input input-bordered input-accent w-full max-w-xs font-bold placeholder:text-black" required />
                    <input type="number" name="quantity" placeholder="Minimum order quantity 10" className="input input-bordered input-accent w-full max-w-xs font-bold placeholder:text-black" required />
                    <input type="submit" value="PLACE ORDER" className="btn btn-accent text-white font-bold w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;
