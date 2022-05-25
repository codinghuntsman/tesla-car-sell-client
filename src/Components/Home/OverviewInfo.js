import React from 'react';

const OverviewInfo = ({ img, quantity, country, icon }) => {
    return (
        <section>
            <div className="flex flex-col justify-center items-center border-0">
                <figure>
                    <img src={img} alt="images" className='w-32 h-36 lg:w-40' />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className='card-title font-extrabold text-sm lg:text-3xl'>{quantity}{icon}</h2>
                    <p className='font-extrabold text-accent text-sm lg:text-xl'>{country}</p>
                </div>
            </div>
        </section>
    );
};

export default OverviewInfo;