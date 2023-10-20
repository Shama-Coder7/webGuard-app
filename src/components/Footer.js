import React from 'react';
import FooterMedia from './FooterMedia';
import { Logo } from '../constant';

const Footer = () => {
  return (
    <div className=" bg-black text-white">
      <div className="m-10 md:m-16 flex justify-between flex-wrap pt-5">
        <div>
          <div className="flex">
            <img
              src={Logo}
              alt="web-logo"
              className="h-6 w-8 border rounded-sm mr-3"
            />
            <p className="text-lg md:text-xl font-bold">WebGuard</p>
          </div>
          <p>
            Discover the full scope of our services
            <br /> and see how we can help you.
          </p>
        </div>
        <div className='pt-5 md:pt-0'>
          <ul className="text-sm">
            <li>Products</li>
            <li>Communications</li>
            <li>Remote Access</li>
            <li>View All Products</li>
          </ul>
        </div>
        <div className='pt-5 md:pt-0'>
          <ul className="text-sm">
            <li>Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>NewsRoom</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='pt-5 md:pt-0'>
          <ul className="text-sm">
            <li>Features</li>
            <li>AutoFill</li>
            <li>Password Vault </li>
            <li>Digital Wallet</li>
            <li>Dark Monitoring</li>
            <li>Remote Access</li>
            <li>Authenticator</li>
          </ul>
        </div>
        <div className=''>
          <ul className="text-sm">
            <li>Resources</li>
            <li>My Account</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Partners</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <hr className="h-1 ml-10 mr-10 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>

      <FooterMedia />
    </div>
  );
};

export default Footer;
