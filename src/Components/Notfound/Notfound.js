import React from 'react';
import notFound from '../../assets/images/notfound.gif';

const Notfound = () => {
    return (
        <div className='mt-4'>
            <h2 className='text-sm md:text-md lg:text-6xl text-center text-red-500 font-extrabold font-sans mt-3'>404</h2>
            <div className='flex justify-center'>
                <img src={notFound} alt="images" />
            </div>
        </div>
    );
};

export default Notfound;