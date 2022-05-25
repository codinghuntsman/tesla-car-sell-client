import React from 'react';
import { Carousel } from 'react-bootstrap';

const Vehicles = () => {
    return (
        <div>
            <div className='mb-3'>
                <p className=' container text-xs md:text-xl lg:text-4xl text-center text-accent mt-24 font-extrabold font-serif bg-clip-text'>OUR UPCOMING LATEST VERSION VEHICLES</p>
                <p className='text-center text-sm lg:text-lg text-pink-500 font-bold font-sans pt-1'>YOU CAN PRE-ORDER FOR EVERY VEHICLES</p>
            </div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/1n6dgbg/tesla2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-sm lg:text-3xl font-extrabold font-sans'>GORGEOUS BODY FITNESS</h3>
                        <p className='font-bold text-xs lg:text-xl font-serif'>You can purchase your favorite vehicles of our manufacturing.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/sp4Yd1p/tesla1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-sm lg:text-3xl font-extrabold font-sans'>SUPER POWER MOTION</h3>
                        <p className='font-bold text-xs lg:text-xl font-serif'>The motion is new life.you can get new opportunity of thin motion.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Vehicles;

/**
 * https://i.ibb.co/sp4Yd1p/tesla1.png
*  https://i.ibb.co/1n6dgbg/tesla2.png
*/