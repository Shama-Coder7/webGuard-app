import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const ProductPricing = () => {
  return (
    <div className="flex justify-between  flex-wrap p-6 bg-black rounded-lg shadow-md text-white mt-10 md:h-28">
      <div>
        <h2 className="font-bold">Get to know about all product's pricing</h2>
        <p className="text-sm mt-2">
          Our platform offers a range of subscription plans that are tailored to
          <br />
          your unique requirements, allowing you to find the perfect fit for you
        </p>
      </div>

      <button className="flex bg-green-500 border rounded-3xl p-2 mt-6">
        See more Pricing <BsArrowUpRight className="m-1" />
      </button>
    </div>
  );
};

export default ProductPricing;
