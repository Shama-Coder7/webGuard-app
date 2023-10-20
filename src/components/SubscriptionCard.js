import React from 'react';
import { TiTick } from 'react-icons/ti';
import { TbFidgetSpinner } from 'react-icons/tb';

const SubscriptionCard = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-12 md:gap-0 mt-4 md:mt-6">
        <div className="bg-white border rounded-t-lg md:rounded-l-lg shadow-md col-span-6 h-72 p-5">
          <div className="flex">
            <img
              src="https://e7.pngegg.com/pngimages/631/343/png-clipart-circle-n-carpet-cleaning-upland-green-dot-corporation-others-rectangle-grass.png"
              alt="green-dot"
              className="mt-1 h-8 w-10"
            />
            <div className="ml-3">
              <p className="text-sm opacity-50">For Individual</p>
              <h3 className="font-bold">Individual Starter Pack</h3>
            </div>
          </div>

          <div className="mt-6">
            <p className=" opacity-50">
              Password management for one type of device that is easy to use and
              is reliable, secure, and easy to use.
            </p>

            <h2 className="font-bold text-2xl mt-6">
              $12 <span className="text-sm opacity-40">/month</span>
            </h2>

            <button className="bg-green-400 border rounded-3xl p-2 w-40 mt-6">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-green-500 border rounded-b-lg md:border rounded-r-lg shadow-md col-span-6 p-5">
          <h3 className="font-bold text-white px-10">What's Included</h3>
          <div className="flex justify-evenly">
            <ul className="mt-5">
              <li className="flex text-white font-serif">
                <TiTick className="mr-3" />
                Unlimited Passwords
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />1 User Account
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                Access on 1 Device Type
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                Dark Web Monitoring
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                Device Password Management
              </li>
            </ul>
            <ul className="mt-3">
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                One-to-One Sharing
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                PasswordLess Login
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                Security Dashboard
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-12 md:gap-0 mt-4 md:mt-6">
        <div className="bg-white border rounded-t-lg md:rounded-l-lg shadow-md col-span-6 h-72 p-5">
          <div className="flex">
            {/* <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/136d357d-8ff0-4bee-affc-ce72c61c5bfb/d4ztyzy-75bfc929-888c-49f7-9fef-b49039b8891d.png/v1/fit/w_512,h_422/splinter_cell_chaos_theory_icon__16colors__by_gygabyte666_d4ztyzy-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIyIiwicGF0aCI6IlwvZlwvMTM2ZDM1N2QtOGZmMC00YmVlLWFmZmMtY2U3MmM2MWM1YmZiXC9kNHp0eXp5LTc1YmZjOTI5LTg4OGMtNDlmNy05ZmVmLWI0OTAzOWI4ODkxZC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wT2pDDSVa2UDnaGW9L8RpsHk4ZG57eNQ4SvYTVx-97o"
              alt="green-dot"
              className="h-6 w-8"
            /> */}

            <TbFidgetSpinner color="green" className="mt-2 h-8 w-8" />
            <div className="ml-3">
              <p className="text-sm opacity-50">For Enterprise</p>
              <h3 className="font-bold">Enterprise Starter Pack</h3>
            </div>
          </div>

          <div className="mt-6">
            <p className=" opacity-50">
              A full range of business features as well as services customized
              to your large business needs
            </p>

            <h2 className="font-bold text-2xl mt-6">
              $94 <span className="text-sm opacity-40">/month</span>
            </h2>

            <button className="bg-green-400 border rounded-3xl p-2 w-40 mt-6">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-green-500 border rounded-b-lg md:rounded-r-lg shadow-md col-span-6 p-5">
          <h3 className="font-bold text-white px-10">What's Included</h3>
          <div className="flex justify-evenly">
            <ul className="mt-5">
              <li className="flex text-white font-serif">
                <TiTick className="mr-3" />
                Unlimited Passwords
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />1 User Account
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                Access on 1 Device Type
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                Dark Web Monitoring
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                Device Password Management
              </li>
            </ul>
            <ul className="mt-3">
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                One-to-One Sharing
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                PasswordLess Login
              </li>
              <li className="flex text-white font-serif mt-3">
                <TiTick className="mr-3" />
                Security Dashboard
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionCard;
