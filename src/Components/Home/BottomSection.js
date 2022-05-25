import React from 'react';
import { FcOk } from "react-icons/fc";
import UseProduct from '../UseProduct/UseProduct';
import BottomSectionInfo from './BottomSectionInfo';

const BottomSection = () => {

    const [products, setProducts] = UseProduct();
    const newProduct = products.slice(3, 6);
    return (
        <div>
            <p className=' container text-xs md:text-xl lg:text-4xl text-center text-accent mt-24 font-extrabold font-serif bg-clip-text'>OUR UPCOMING MULTI FUNCTIONAL ENGINE</p>
            <p className='text-center text-sm lg:text-lg text-pink-500 font-bold font-sans pt-1'>YOU CAN PRE-ORDER FOR ENGINE</p>
            <div className='flex justify-center'><p><FcOk /></p></div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-3 container'>
                {
                    newProduct.map(product => <BottomSectionInfo key={product._id} product={product}></BottomSectionInfo>)
                }
            </div>
        </div>
    );
};

export default BottomSection;