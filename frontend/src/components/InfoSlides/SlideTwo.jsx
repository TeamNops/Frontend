import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const SlideTwo = () => {
  const blockyTextStyle = {
    fontFamily: "Nasalization",
  };

  return (
    <div className='flex flex-col' style={blockyTextStyle}>
      <h1 className='text-6xl justify-start items-center mb-5'>Online Meet Transcript</h1>
      <h1 className='text-xl justify-start items-center mb-[26vh]'>
      Competitive environment for user todolist. 
      </h1>

    </div>
  );
};

export default SlideTwo;