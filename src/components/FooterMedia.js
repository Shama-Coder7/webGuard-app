import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { IoBasketballOutline } from 'react-icons/io5';

const FooterMedia = () => {
  return (
    <div className="flex justify-between">
      <div className="m-6 ml-10 md:ml-16">© 2023 WebGuard. All rights reserved.</div>
      <div className="m-6 ml-10 md:ml-16">
        <ul className="flex justify-around">
          <li className="mr-5">
            <AiOutlineTwitter />
          </li>
          <li className="mr-5">
            <AiFillLinkedin />
          </li>
          <li className="mr-5">
            <BsFacebook />
          </li>
          <li className="mr-5">
            <AiFillGithub />
          </li>
          <li className="mr-5">
            <IoBasketballOutline />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMedia;
