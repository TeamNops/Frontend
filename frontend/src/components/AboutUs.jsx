import React from "react";
import LoginOptions from "./loginpages/LoginOptions";

export default function AboutUs() {

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100 p-4">
      <video
        src="/src/assets/138770-770553751.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        <LoginOptions />
      </div>
    </div>
  );
}
