import React from 'react';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Subscription from './Subscription';
import Services from './Services';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
      <MainContainer />
      <SecondaryContainer/>
      <Subscription/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default Body;
