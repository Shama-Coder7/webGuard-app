import React from 'react';
import Sliders from './Sliders';

const SecondaryContainer = () => {
  return (
    <div className="m-4 mt-[42rem] md:mt-8 md:px-8 md:ml-8">
      <h2 className="font-bold md:text-4xl md:ml-6">
        Automate the management of all your passwords with our auto-pilot
        feature
      </h2>
      <p className="font-sm opacity-40 md:ml-6 mt-6">
        Welcome to our password management platform, where you can put your
        password with Automate the management of all your passwords with our
        auto-pilot <br/>feature, you can effortlessly manage all your password in one
        place
      </p>
      <div>
        <Sliders />
      </div>
    </div>
  );
};

export default SecondaryContainer;
