import React from 'react';
import SubscriptionCard from './SubscriptionCard';
import ProductPricing from './ProductPricing';

const Subscription = () => {
  return (
    <div className='h-screen m-10 md:m-16 md:mt-20'>
      <div>
        <h2 className='font-bold text-xl md:text-4xl md:flex md:justify-center md:items-center'>Find the perfect subscription to meet your unique requirements.</h2>
        <p className='text-sm opacity-50 flex justify-center items-center m-2 md:m-4'>
          Looking for a subscription that fits your unique needs? Look no
          further. With our platform, you can find the perfect subscription plan
          that caters to your specific requirements.
        </p>
      </div>

      <SubscriptionCard/>
      <ProductPricing/>
    </div>

    
  );
};

export default Subscription;
