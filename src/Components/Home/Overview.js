import React from 'react';
import OverviewInfo from './OverviewInfo';
import flag from '../../assets/images/flag.png';
import projectIcon from '../../assets/images/project-icon.png';
import client from '../../assets/images/happy-client.png';
import feedbacks from '../../assets/images/feedback.png';
import { BiPlus } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Overview = () => {
    return (
        <section className='bg-cyan-50'>
            <div className='container mt-24'>
                <p className='text-accent text-center text-sm md:text-xl lg:text-4xl font-extrabold font-sans pt-5'>MILLIONS PEOPLE TRUST US</p>
                <p className='text-center text-sm lg:text-lg text-black font-medium font-sans pt-1'>TRY TO UNDERSTAND USER EXPECTATIONS</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-24 container'>
                <OverviewInfo img={flag} quantity='162' icon={<BiPlus />} country='Country'></OverviewInfo>
                <OverviewInfo img={projectIcon} quantity='5000' icon={<BiPlus />} country='Completed Project'></OverviewInfo>
                <OverviewInfo img={client} quantity='2 Billions' icon={<BiPlus />} country='Happy Client'></OverviewInfo>
                <OverviewInfo img={feedbacks} quantity='1 Billion' icon={<BiPlus />} country='feedbacks'></OverviewInfo>
            </div>
            <div className='container bg-gray-50 shadow-xl p-5 border-2 border-accent rounded-md'>
                <h2 className='text-accent text-sm lg:text-3xl font-extrabold font-sans'>Have any question about us or get a product request</h2>
                <p className='text-sm text-black font-medium lg:text-xl'>Don't hesitate to contact with us</p>
                <div className='flex justify-end'>
                    <button className="btn btn-wide bg-gradient-to-r from-accent to-red-500 border-0 btn-xs sm:btn-sm md:btn-md font-sans font-bold"><Link className='text-white' to="/">Contact Us</Link> </button>                </div>
            </div>
        </section>
    );
};

export default Overview;