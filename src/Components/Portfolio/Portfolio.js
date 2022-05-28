import React from 'react';
import image from '../../assets/images/sobuj.png';

const Portfolio = () => {
    return (
        <div className='bg-cyan-50'>
            <div className='flex justify-center'>
                <div className="card card-compact w-full lg:w-6/12 shadow-xl mt-3 mb-3">
                    <figure>
                        <img className='border-2 border-accent rounded-full' src={image} alt="img" />
                    </figure>
                    <div className="card-body">
                        <h2 className='text-sm md:text-md lg:text-2xl font-bold font-serif'><span className='text-accent'>Name: </span>Md.Sajedul Islam</h2>
                        <h2 className='text-sm md:text-md lg:text-xl font-bold font-serif'><span className='text-accent'>Email: </span>sajed.sobuj@gmail.com</h2>
                        <h2 className='text-sm md:text-md lg:text-xl font-bold font-sans text-accent'>Educational Background:</h2>
                        <p className='text-sm md:text-md lg:text-md font-bold font-sans'>
                            I have completed SSC and Diploma education.also completed BSc in CSE at Atish Dipankar University of Science & Technology. Uttara,Dhaka.
                        </p>
                        <h2 className='text-sm lg:text-2xl font-extrabold font-sans text-accent text-center mt-3 underline'>List Of Technologist:</h2>
                        <p className='text-pink-500 text-sm lg:text-xl font-bold font-sans'>Perfectly i know:</p>
                        <li className='font-bold text-sm lg:text-lg'>HTML (Hyper Text Markup Language)</li>
                        <li className='font-bold text-sm lg:text-lg'>CSS (Cascading Style Sheets)</li>
                        <li className='font-bold text-sm lg:text-lg'>Bootstrap</li>
                        <li className='font-bold text-sm lg:text-lg'>Tailwind</li>
                        <li className='font-bold text-sm lg:text-lg'>React Bootstrap</li>
                        <li className='font-bold text-sm lg:text-lg'>Java Script</li>
                        <li className='font-bold text-sm lg:text-lg'>React</li>
                        <li className='font-bold text-sm lg:text-lg'>React firebase hooks</li>
                        <li className='font-bold text-sm lg:text-lg'>React hook forms</li>
                        <li className='font-bold text-sm lg:text-lg'>React query</li>
                        <li className='font-bold text-sm lg:text-lg'>Firebase</li>
                        <li className='font-bold text-sm lg:text-lg'>Mongodb</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;