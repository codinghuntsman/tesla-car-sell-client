import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import background from '../../assets/images/footer.png';
import { FcOk } from "react-icons/fc";
import { FaFacebookF, FaTwitter, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const currentDate = date.getDate();
    const year = date.getFullYear();
    return (
        <footer className='mt-16 border-t bg-neutral text-neutral-content'
        // style={{ background: `url(${background})`, backgroundSize: "cover", overflow: "hidden" }}
        >
            <footer className="footer p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t">
                <div className="items-center grid-flow-col">
                    <button className="btn btn-circle btn-outline btn-sm md:btn-md lg:btn-md border hover:bg-white p-2">
                        <img className='w-10' src={logo} alt="logo" />
                    </button>
                    <p>TESLA Manufacturing Ltd. <br />Providing reliable manufacturing since 2003</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <button className="btn btn-circle btn-outline btn-sm md:btn-md lg:btn-md border">
                            <Link to="/"><FaFacebookF className='lg:w-8 lg:h-8 hover:text-white text-accent' /></Link>
                        </button>
                        <button className="btn btn-circle btn-outline btn-sm md:btn-md lg:btn-md border">
                            <Link to="/"><FaTwitter className='lg:w-8 lg:h-8 hover:text-white text-accent' /></Link>
                        </button>
                        <button className="btn btn-circle btn-outline btn-sm md:btn-md lg:btn-md border">
                            <Link to="/"><FaGoogle className='lg:w-8 lg:h-8 hover:text-white text-accent' /></Link>
                        </button>
                        <button className="btn btn-circle btn-outline btn-sm md:btn-md lg:btn-md border">
                            <Link to="/"><FaYoutube className='lg:w-8 lg:h-8 hover:text-white text-accent' /></Link>
                        </button>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center border-t p-4">
                <div className='sm:flex-col lg:flex lg:justify-center lg:items-center lg:flex-row font-medium'>
                    <p><FcOk /></p>
                    <p>Copyright &copy; All right reserved by Tesla manufacturing Ltd</p>
                    <img className='w-8' src={logo} alt="logo" />
                    <span>{day}, {month} {currentDate}, {year}</span>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;