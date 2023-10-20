import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Sliders() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-4">
      <Slider {...settings}>
        <div className="md:p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Log in and go</h3>
            <p className="text-sm opacity-40">
              Once you save a password in WebGuard.save a password in
              WebGuard,save a password in WebGuard.
            </p>
            <img
              src="https://img.freepik.com/free-photo/elegant-smiling-woman-glasses-striped-shirt-using-laptop-computer-while-siting-table-kitchen_171337-13030.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697673600&semt=ais"
              alt="slider-login"
            />
          </div>
        </div>
        <div className="md:p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Dark Web Monitoring</h3>
            <p className="text-sm opacity-40">
              Stop Worrying about data breaches. Stop Worrying about data
              breaches.
            </p>
            <img
              src="https://media.licdn.com/dms/image/C5612AQFkZukycUj4og/article-cover_image-shrink_720_1280/0/1591141217997?e=2147483647&v=beta&t=D1QmwRP-t_ch6wNuSWZ8G7X0MNlJ9BCmHVnh-jxbMxE"
              alt="slider-dark-web"
            />
          </div>
        </div>
        <div className="md:p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Two-factor Authentication</h3>
            <p className="text-sm opacity-40">
              Easily Identify websites where you can turn on two-factor
              authentication and use webGuard as an authenticator{' '}
            </p>
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_Two_Factor_Authentication.jpg"
              alt="slider-two-factor"
              className="h-64"
            />
          </div>
        </div>
        <div className="md:p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Passwordless login</h3>
            <p className="text-sm opacity-40">
              Gain Instant access to your WebGuard vault by using the webGuard
              Authenticator instead of your master password
            </p>
            <img
              src="https://discover.strongdm.com/hubfs/625f136cf33b1e45517b3d75_passwordless-authentication.jpeg"
              alt="slider-passwordless"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
