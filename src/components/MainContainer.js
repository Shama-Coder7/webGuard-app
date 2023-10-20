import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Cards from './Cards';

const MainContainer = () => {
  return (
    <div className='h-screen'>
      <div className="m-14 md:ml-62">
        <h1 className="font-bold md:text-[3rem] flex justify-evenly text-center">
          Say goodbye to the stress of forgotten <br />
          passwords and the fear of data breaches
        </h1>
        <p className="text-bold flex text-center md:ml-64 md:mr-56 opacity-60">
          Say goodbye to the stress of forgotten passwords and the fear of data
          breaches. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since.
        </p>
      </div>
      <div className='flex justify-center text-center'>
        <button className='bg-green-400 border rounded-3xl p-2 w-48 mr-4'>Try WebGuard Now</button>
        <button className="flex border rounded-3xl p-2 px-5 w-36">
          Learn More <FaLongArrowAltRight className="mt-1 px-1" />
        </button>
      </div>
      <Cards/>

    </div>
  );
};

export default MainContainer;
