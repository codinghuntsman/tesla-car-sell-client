import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Purchase = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handlePurchase = (event) => {
        event.preventDefault();
        const country = event.target.country.value;
        const location = event.target.location.value;
        const phone = event.target.number.value;
        const quantity = event.target.quantity.value;
        const account = event.target.account.value;


        const purchaseInfo = {
            name: user.displayName,
            email: user.email,
            country: country,
            location: location,
            phone: phone,
            quantity: quantity,
            bankAccount: account,
        }

        //-----------Post method or create method-----------------
        fetch('http://localhost:5000/purchase', {
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
    }
    return (
        <div>
            <h2 className=' text-center text-pink-500 text-sm md:text-md lg:text-xl font-extrabold font-sans'>PLEASE FILL OUT FORM THEN PLACE YOUR ORDER</h2>
            <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered input-accent w-full max-w-xs font-bold" />
                <input type="text" name="email" disabled value={user?.email} className="input input-bordered input-accent w-full max-w-xs font-bold" />
                <input type="text" name="country" placeholder="Your country" className="input input-bordered input-accent w-full max-w-xs font-bold placeholder:text-black" required />
                <input type="text" name="location" placeholder="Current location" className="input input-bordered input-accent w-full max-w-xs font-bold placeholder:text-black" required />
                <input type="text" name="number" placeholder="Phone number" className="input input-bordered input-accent w-full max-w-xs font-bold placeholder:text-black" required />
                <input type="text" name="quantity" placeholder="Quantity minimum 10" className="input input-bordered input-accent w-full max-w-xs font-bold placeholder:text-black" required />
                <input type="text" name="account" placeholder="Your bank account number" className="input input-bordered input-accent w-full max-w-xs font-bold placeholder:text-black" required />
                <input type="submit" value="PLACE ORDER" className="btn btn-accent text-white font-bold w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Purchase;