import React, { useState, useEffect, useRef } from "react";
import SlideOne from "./InfoSlides/SlideOne";
import SlideTwo from "./InfoSlides/SlideTwo";
import SlideThree from "./InfoSlides/SlideThree";
import SlideFour from "./InfoSlides/SlideFour";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const InfoPage = () => {
  const slides = [<SlideOne />, <SlideTwo />, <SlideThree />, <SlideFour />];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (autoPlay && !isHovered) {
      timeoutRef.current = setTimeout(
        () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length),
        3000
      );
    }
    return () => resetTimeout();
  }, [autoPlay, currentIndex, isHovered, slides.length]);

  const goToNextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const goToPrevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );

  const blockyTextStyle = {
    fontFamily: "Nasalization",
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-gray-100 p-4"
      style={blockyTextStyle}
    >
      <img
        src="/src/assets/moon-o.webp"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
      />
      <div className="relative z-10 flex flex-col items-center justify-start h-full mt-10 text-white">
        <div className="w-full max-w-6xl rounded-lg overflow-hidden">
          <div className="relative">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-14"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {slide}
                </div>
              ))}
            </div>
            <button
              onClick={goToPrevSlide}
              className="absolute left-2 top-1/2 mt-5 -translate-y-1/2 p-1 rounded-full bg-transparent hover:bg-black/75 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-200" />
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-2 top-1/2 mt-5 -translate-y-1/2 p-1 rounded-full bg-transparent hover:bg-black/75 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-200" />
            </button>
          </div>
        </div>

        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="mt-10 p-3 text-black bg-gray-400 rounded-full hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={autoPlay ? "Pause autoplay" : "Start autoplay"}
        >
          {autoPlay ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default InfoPage;
