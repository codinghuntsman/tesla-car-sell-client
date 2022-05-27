import React from 'react';
import UseProduct from '../UseProduct/UseProduct';
import TopSectionInfo from './TopSectionInfo';

const TopSection = () => {

    const [products, setProducts] = UseProduct();
    const newProducts = products.slice(0, 3);
    return (
        <div>
            <p className=' container text-xs md:text-xl lg:text-4xl text-center text-accent mt-24 font-extrabold font-serif bg-clip-text'>YOU CAN PURCHASE YOUR FAVORITE VEHICLES</p>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-3 container'>

                {/*---------------------------------Static methods------------------------- */}
                {/* <TopSectionInfo src="https://i.ibb.co/cgBfWDy/tesla-five-by-three.png" name="SUPER POWER ENGINE" description="You can open your serial any time" quantity="1200" available="800" engine="60000"></TopSectionInfo>
                <TopSectionInfo src="https://i.ibb.co/9rnpvTj/tesla-five-by-three-1.png" name="POWERFUL MECHANISM" description="You can open your serial any time" quantity="1500" available="1100" engine="60000"></TopSectionInfo>
                <TopSectionInfo src="https://i.ibb.co/B2j3g5Y/tesla-five-by-three-2.png" name="EXTRAORDINARY STRUCTURE" description="You can open your serial any time" quantity="1400" available="900" engine="60000"></TopSectionInfo> */}


                {/*----------------Dynamic---------------- */}
                {/*----------------Dynamic---------------- */}
                {
                    newProducts.map(product => <TopSectionInfo key={product._id} product={product} ></TopSectionInfo>)
                }
            </div>
        </div>


    );
};

export default TopSection;