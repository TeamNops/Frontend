'use client'

import React from "react"
import { ReactTyped } from "react-typed"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import AboutUs from "./AboutUs"
import InfoPage from "./InfoPage"

export default function Home() {
  const blockyTextStyle = {
    fontFamily: "Nasalization",
  }

  const handleCheckItOut = () => {
    const aboutUsSection = document.getElementById("about-us-section")
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full">
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/src/assets/23882-338327769.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex h-full">
          <div
            className="flex flex-col items-start justify-start mt-[11vh] w-1/2 h-full px-4"
            style={blockyTextStyle}
          >
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <h1 className="text-4xl sm:text-6xl lg:text-9xl text-indigo-500 text-center">MERCURY</h1>
            <h2 className="text-base sm:text-lg lg:text-3xl text-indigo-200 mt-2 sm:mt-5 italic text-center">
              <ReactTyped
                strings={["Supercharge Your Workflows"]}
                typeSpeed={50}
                cursorChar=""
              />
            </h2>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
            >
            <button
              className="text-lg sm:text-xl lg:text-4xl text-indigo-300 mt-8 sm:mt-16 lg:mt-72 ml-44 flex items-center space-x-2 animate-pulse bg-transparent"
              onClick={handleCheckItOut}
            >
              <span>Check It Out!</span>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col items-center mt-[66vh] w-1/2 h-full px-4"
            style={blockyTextStyle}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-4xl lg:text-6xl text-indigo-300 text-center">
              An AI Powered Productivity Platform
            </h1>
          </motion.div>
        </div>
      </div>

      <div id="info-page-section">
        <InfoPage />
      </div>

      <div id="about-us-section">
        <AboutUs/>
      </div>
    </div>
  )
}