import React from 'react';
import { useNavigate } from 'react-router-dom';

const SlideFour = () => {

  const blockyTextStyle = {
    fontFamily: "Nasalization",
  };

  return (
    <div className='flex flex-col' style={blockyTextStyle}>
      <h1 className='text-5xl justify-start items-center mb-8'>Personalized Recommendation</h1>
      <h1 className='text-xl justify-start items-center mb-[26vh]'>
        With real-time feedback!
      </h1>
    </div>
  );
};

export default SlideFour;
