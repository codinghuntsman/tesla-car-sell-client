import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-sm lg:text-2xl pl-10 font-bold text-pink-500 font-serif mt-2'>Welcome to your dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side mt-14">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review">Add a Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;