import React from 'react';
import notFound from '../../assets/images/dribbble.gif';

const Notfound = () => {
    return (
        <div>
            <h2 className=' text-sm md:text-md lg:text-2xl text-center text-red-400 font-bold font-serif'>The page you are looking that not found, please try again</h2>
            <h2 className='text-sm md:text-md lg:text-5xl text-center text-red-500 font-extrabold font-sans mt-3'>404</h2>
            <div className='flex justify-center'>
                <img src={notFound} alt="images" />
            </div>
        </div>
    );
};

export default Notfound;