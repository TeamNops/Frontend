import React from "react";
import LoginOptions from "./loginpages/LoginOptions";
import { motion, useInView } from "framer-motion";

export default function AboutUs() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const blockyTextStyle = {
    fontFamily: "Nasalization",
  };

  return (
    <div 
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-gray-100 p-4" 
      style={blockyTextStyle}
    >
      <video
        src="/src/assets/138770-770553751.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start from bottom (positive y value)
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full mt-[18vh]">
          <LoginOptions />
        </div>
      </motion.div>
    </div>
  );
}