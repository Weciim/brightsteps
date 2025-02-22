import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaChalkboardTeacher,
  FaComments,
  FaUniversalAccess,
  FaHandsHelping,
  FaBrain,
} from "react-icons/fa";

const offerings = [
  {
    title: "Personalized Learning",
    description: "Tailored lessons to fit each child's unique learning needs.",
    icon: <FaBook className="w-8 h-8 " />,
  },
  {
    title: "Specialized Educators",
    description: "Guidance from experts in special needs education.",
    icon: <FaChalkboardTeacher className="w-8 h-8" />,
  },
  {
    title: "AI-Powered Chatbot",
    description: "24/7 assistance for learning and answering questions.",
    icon: <FaComments className="w-8 h-8" />,
  },
  {
    title: "Accessible Learning Tools",
    description: "Inclusive resources including sign language support.",
    icon: <FaUniversalAccess className="w-8 h-8" />,
  },
  {
    title: "Supportive Community",
    description: "A safe and engaging space for children and parents.",
    icon: <FaHandsHelping className="w-8 h-8" />,
  },
  {
    title: "Cognitive Development Activities",
    description: "Interactive exercises to boost cognitive skills.",
    icon: <FaBrain className="w-8 h-8" />,
  },
];

const Offerings = () => {
  return (
    <div className="w-full mx-auto text-white mt-12">
      <h2 className="font-inter font-semibold text-2xl md:text-4xl mb-8">
        BrightSteps Offerings
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-6"
      >
        {offerings.map((offering, index) => (
          <motion.div
            key={index}
            className="bg-richblack-900 text-white border border-richblack-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-start p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
              <span className="text-3xl text-blue-400 mr-4 flex-shrink-0">
                {offering.icon}
              </span>
              <div className="flex flex-col justify-start">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {offering.title}
                </h3>
                <p className="text-gray-400 text-base">
                  {offering.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Offerings;
