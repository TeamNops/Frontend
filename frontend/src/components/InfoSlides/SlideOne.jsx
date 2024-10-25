import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const SlideOne = () => {
  const blockyTextStyle = {
    fontFamily: "Nasalization",
  };

  return (
    <div className='flex flex-col' style={blockyTextStyle}>
      <h1 className='text-6xl justify-start items-center mb-5'>Quiz</h1>
      <h1 className='text-xl justify-start items-center mb-44'>
        A personalized testing system which dynamically adjusts the difficulty of questions based on your performance.
      </h1>
    </div>
  );
};

export default SlideOne;
