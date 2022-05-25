import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/sJ6gWLw/tesla-5.png"
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
                    src="https://i.ibb.co/gdMqJ18/tesla-1.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-sm lg:text-3xl font-extrabold font-sans'>SUPER POWER MOTION</h3>
                    <p className='font-bold text-xs lg:text-xl font-serif'>The motion is new life.you can get new opportunity of thin motion.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/VgK6M07/tesla-10.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-sm lg:text-3xl font-extrabold font-sans'>EXTRAORDINARY MANUFACTURING</h3>
                    <p className='font-bold text-xs lg:text-xl font-serif'>Present we manufacture the worldwide largest vehicles.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;