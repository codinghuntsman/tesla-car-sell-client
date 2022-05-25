import React from 'react';
import { Link } from 'react-router-dom';

const MiddleSectionInfo = ({ product }) => {

    const { img, name, description, engine, quantity, available } = product;
    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded-xl">
            <figure className='px-2 pt-2'>
                <img className='rounded-md' src={img} alt="images" />
            </figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title text-sm lg:text-xl text-black font-bold font-sans">{name}</h2>
                    <p className='text-black text-sm lg:text-base font-medium text-justify'><span className='text-black font-bold'>description:</span> {description}</p>
                    <p className='text-black text-sm lg:text-base'><span className='text-black font-bold'>engine: <span className=' text-orange-600'>$</span> </span> {engine}</p>
                    <p className='text-black text-sm lg:text-base'><span className='text-black font-bold'>quantity:</span> {quantity}</p>
                    <p className='text-black text-sm lg:text-base'><span className='text-black font-bold'>available:</span> {available}</p>
                </div>
                <div className="card-actions justify-center mt-3">
                    <button className="btn btn-wide bg-gradient-to-r from-accent to-red-500 border-0 btn-xs sm:btn-sm md:btn-md font-sans font-bold"><Link className='text-white' to="/purchase">Determine</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default MiddleSectionInfo;