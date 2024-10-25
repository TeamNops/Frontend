import React from "react";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import AboutUs from "./AboutUs";

export default function Home() {
  const blockyTextStyle = {
    fontFamily: "Nasalization",
  };

  return (
    <div className="w-full">
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/src/assets/43661-436237700.mp4" type="video/mp4" />
        </video>

        <div
          className="relative z-10 flex flex-col items-center justify-center w-1/2 h-full"
          style={blockyTextStyle}
        >
          <h1 className="text-6xl sm:text-9xl text-black">MERCURY</h1>
          <h2 className="text-lg sm:text-3xl text-black mt-5 italic">
            <ReactTyped
              strings={["Supercharge Your Productivity"]}
              typeSpeed={50}
              cursorChar=""
            />
          </h2>

          <button
            className="text-2xl sm:text-2xl text-black mt-16 sm:mt-28 flex items-center space-x-2 animate-bounce"
            onClick={() => {
              const aboutUsSection =
                document.getElementById("about-us-section");
              if (aboutUsSection) {
                aboutUsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Check It Out!</span>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
        
        <div
          className="relative z-10 flex flex-col items-center justify-center w-1/2 h-full"
          style={blockyTextStyle}
        >
          <h1 className="text-6xl sm:text-xl text-black">
            An AI Powered Productivity Platform
          </h1>
        </div>
      </div>

      <div id="about-us-section">
        <AboutUs />
      </div>
    </div>
  );
}
