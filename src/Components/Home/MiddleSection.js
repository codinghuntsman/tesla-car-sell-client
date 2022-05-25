import React from 'react';
import UseProduct from '../UseProduct/UseProduct';
import MiddleSectionInfo from './MiddleSectionInfo';
import { FcOk } from "react-icons/fc";

const MiddleSection = () => {
    const [products, setProducts] = UseProduct();
    const newProduct = products.slice(3, 9);
    return (
        <div>
            <p className=' container text-xs md:text-xl lg:text-4xl text-center text-accent mt-24 font-extrabold font-serif bg-clip-text'>OUR UPCOMING FAVORITE VEHICLES ENGINE</p>
            <p className='text-center text-sm lg:text-lg text-pink-500 font-bold font-sans pt-1'>YOU CAN PRE-ORDER FOR EVERY ENGINE</p>
            <div className='flex justify-center'><p><FcOk /></p></div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-3 container'>
                {
                    newProduct.map(product => <MiddleSectionInfo key={product._id} product={product} ></MiddleSectionInfo>)
                }
            </div>
        </div>
    );
};

export default MiddleSection;

/**
 * image size 500/300
 * https://i.ibb.co/dDf8K1z/engine-1.png
*  https://i.ibb.co/jHNB94N/engine-3.png
*  https://i.ibb.co/DGZX6Zy/engine-6.png
*  https://i.ibb.co/rc8RV1C/engine-8.png
*  https://i.ibb.co/fxCJNdd/engine-9.png
*  https://i.ibb.co/9WWpDWk/engine-10.png
*/