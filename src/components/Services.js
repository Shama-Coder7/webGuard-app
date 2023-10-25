import React from 'react';
import {
  HubSpot,
  Netflix,
  liveChat,
  loom,
  mcAfee,
  microsoft,
  salesforce,
  spotify,
} from '../constant';

const Services = () => {
  return (
    <div className="m-10 md:m-28 mt-[70rem] md:mt-48">
      <div className="md:flex md:justify-between flex-wrap flex justify-center">
        <img src={microsoft} alt="microsoft" className="opacity-30 h-20 md:h-28" />
        <img src={spotify} alt="spotify" className="opacity-30 h-16 md:h-16 md:mt-5" />
        <img src={mcAfee} alt="mcAfee" className="opacity-30 h-22 md:h-28" />
        <img src={salesforce} alt="salesforce" className="opacity-30 h-22 md:h-28" />
      </div>
      <div className="md:flex md:justify-between flex-wrap mt-10 flex justify-center">
        <img src={HubSpot} alt="HubSpot" className="opacity-30 h-14 md:h-20" />
        <img src={loom} alt="loom" className="opacity-30 h-18 md:h-20" />
        <img src={Netflix} alt="Netflix" className="opacity-30 h-18 md:h-20" />
        <img src={liveChat} alt="liveChat" className="opacity-30 h-18 md:h-20" />
      </div>
    </div>
  );
};

export default Services;
