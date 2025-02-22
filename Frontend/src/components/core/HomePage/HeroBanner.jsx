import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HighlightText from "./HighlightText";
import Spline from "@splinetool/react-spline";

const HeroBanner = () => {
  return (
    <motion.section
      className="relative h-screen w-full lg:w-fit mx-auto top-0 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Centered Text Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 2 }}
        >
          <HighlightText text={"Welcome to BrightSteps"} />
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <span
            className="bg-gradient-to-b from-[#4A90E2] to-[#50BFA5] 
            text-transparent bg-clip-text font-bold"
          >
            Inclusive and accessible education for all
          </span>
        </motion.p>
        <motion.button
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm md:text-base lg:text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/signup">Join Us</Link>
        </motion.button>
      </div>

      {/* Spline background */}
      <div className="absolute inset-0 w-full h-screen z-0">
        <Spline scene="https://prod.spline.design/4rellZQ0KKwq7ZYv/scene.splinecode" />
      </div>
    </motion.section>
  );
};

export default HeroBanner;
