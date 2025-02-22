import React from "react";
import HighlightText from "../core/HomePage/HighlightText";
import { motion } from "framer-motion";
import Nermine from "../../assets/images/nermine.jpeg";
import Iheb from "../../assets/images/iheb.jpeg";
import Wassim from "../../assets/images/wassim.jpeg";
import Nidhal from "../../assets/images/nidhal.jpeg";
import Ahmed from "../../assets/images/ahmed.jpeg";
import Firas from "../../assets/images/firas.jpeg";

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <div className="bg-gradient-to-b from-richblack-900 to-richblack-800 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section with Decorative Elements */}
        <section className="relative mb-20">
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-full opacity-10 blur-xl"></div>
          
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              About <HighlightText text={"BrightSteps"} />
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-richblack-100 max-w-4xl mx-auto leading-relaxed">
              BrightSteps is a specialized educational platform designed to empower children with special needs. Our mission is to provide an inclusive and accessible learning environment that adapts to the unique cognitive, motor, and sensory challenges of each child.
            </p>
          </motion.div>
        </section>

        {/* Mission and Vision with Card Design */}
        <section className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.div 
            className="bg-richblack-800 p-8 rounded-xl border border-richblack-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/30"
            {...fadeInUp}
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-richblack-100 leading-relaxed">
              At BrightSteps, our mission is to create an inclusive and accessible educational platform tailored specifically for children with special needs. We aim to empower these children by providing them with the tools and resources they need to thrive in their learning journey.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-richblack-800 p-8 rounded-xl border border-richblack-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/30"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500  bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-richblack-100 leading-relaxed">
              We envision a world where every child, regardless of their abilities, has equal access to quality education. By leveraging cutting-edge technology and innovative pedagogical approaches, we strive to break down barriers and foster an environment of inclusion.
            </p>
          </motion.div>
        </section>

        {/* Values Section with Modern Design */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Inclusion", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", color: "from-green-400 to-emerald-500", delay: 0 },
              { title: "Innovation", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "from-blue-400 to-indigo-500", delay: 0.1 },
              { title: "Accessibility", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z", color: "from-purple-400 to-violet-500", delay: 0.2 },
              { title: "Empathy", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", color: "from-pink-400 to-rose-500", delay: 0.3 }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-richblack-800 p-6 rounded-xl border border-richblack-700 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:border-blue-500/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: value.delay, duration: 0.5 }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-richblack-200 text-sm">
                  {value.title === "Inclusion" && "We believe in creating a learning environment where every child feels valued and supported."}
                  {value.title === "Innovation" && "We are committed to using the latest technologies to enhance the learning experience for all children."}
                  {value.title === "Accessibility" && "Our platform is designed to be intuitive and user-friendly for children with diverse needs and abilities."}
                  {value.title === "Empathy" && "We understand the unique challenges faced by children with special needs and develop solutions with care."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section with Cards */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-richblack-200 max-w-3xl mx-auto mb-12">
              BrightSteps is brought to life by a passionate and dedicated team of professionals who are committed to making a difference in the field of special education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Nermine Ezzine", image: Nermine },
              { name: "Iheb Bettaieb", image: Iheb },
              { name: "Wassim Derouiche", image: Wassim },
              { name: "Ahmed Belhaj Yahia", image: Ahmed },
              { name: "Firas Maalej", image: Firas },
              { name: "Mohamed Nidhal Sanaa", image: Nidhal }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-richblack-800 rounded-xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;