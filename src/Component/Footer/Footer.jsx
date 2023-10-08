/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-300 text-base-content">
      <nav className=' mx-auto max-w-screen-xl'>
        <header className="footer-title text-xl">Services</header> 
        <a className="link link-hover">Branding</a> 
        <a className="link link-hover">Design</a> 
        <a className="link link-hover">Marketing</a> 
        <a className="link link-hover">Advertisement</a>
      </nav> 
      <nav>
    <header className="footer-title text-xl ">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
      <nav>
        <header className="footer-title  text-xl">Company</header> 
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Jobs</a> 
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav>
      <div>
      <header className="footer-title text-center text-xl ">Social</header> 
        <div className="grid grid-flow-col gap-4">
         <Link to='https://www.facebook.com/' target="_blank"> <FaFacebook className='text-4xl text-[#0866FF]'></FaFacebook> </Link>
         <Link to='https://www.youtube.com/' target="_blank"> 
          <FaYoutube className='text-4xl text-[#CD201F]'></FaYoutube> </Link>
         <Link to='https://twitter.com/' target="_blank"> <FaTwitter className='text-4xl text-[#1DA1F2]'></FaTwitter> </Link>
         <Link to='https://bd.linkedin.com/' target="_blank"> <FaLinkedin className='text-4xl text-[#0072b1]'></FaLinkedin> </Link>
        </div>
      </div>
      </nav>
    </footer>
    );
};

export default Footer;