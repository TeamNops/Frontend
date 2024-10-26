import React from 'react';
import { useNavigate } from 'react-router-dom';

const SlideThree = () => {
  const blockyTextStyle = {
    fontFamily: "Nasalization",
  };

  return (
    <div className='flex flex-col' style={blockyTextStyle}>
      <h1 className='text-6xl justify-start items-center mb-5'>Mental Health Solution</h1>
      <h1 className='text-xl justify-start items-center mb-[26vh]'>
        Let us know how we can improve your problem by occupying WORK FROM HOME Culture!
      </h1>
    </div>
  );
};

export default SlideThree;