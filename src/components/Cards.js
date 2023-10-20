import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

function Cards() {
  const containerRef = useRef(null);

  const handleSwipedLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200;
    }
  };

  const handleSwipedRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200;
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  return (
    <div>
      <section {...swipeHandlers}>
        <div
          className="md:flex md:justify-center md:items-center mt-10"
          ref={containerRef}
        >
          <div className="md:w-px-42 md:z-20 md:mr-3 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 tilt">
            <img
              src="https://img.freepik.com/free-vector/social-media-icons-globe_1057-1076.jpg"
              alt="icons-card"
              className="md:h-64 md:w-72"
            />
          </div>

          <div className="md:w-px-30 md:z-10 md:h-72 md:-mt-2 mr-3 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 tilt">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/03/S4A_FTR_Blog_MerchxTicketing_1440x820-1-1440x733.jpg"
              alt="spotify-card"
              className="md:h-72 h-64"
            />
          </div>

          <div className="md:w-px-36 md:z-0 md:h-56 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 tilt">
            <img
              src="https://c.s-microsoft.com/en-us/CMSImages/View-All-Devices_1040x585.jpg?version=86785624-147f-5da0-fa16-d1cc9b31f71b"
              alt="devices-card" className='md:h-52'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
