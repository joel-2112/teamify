import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-160px)] px-4 sm:px-6 lg:px-8 py-12">
      {/* Welcome Text Section */}
      <motion.div 
        className="text-center w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Welcome To Your{" "}
            <motion.span 
              className="text-bright-orange bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Virtual Office
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            Collaborate seamlessly with your team from anywhere in the world
          </motion.p>
        </motion.div>
      </motion.div>
      
      {/* Buttons Section */}
      <motion.div 
        className="w-full max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          <motion.button
            className="bg-bright-orange hover:bg-orange-600 text-white font-medium  py-2  rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 flex-1 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Instant Demo
          </motion.button>
          
          <Link to="/subscription-plan" className="flex-1 min-w-[200px]">
            <motion.button
              className="border border-bright-orange text-white font-medium  py-2 rounded-lg transition-all duration-300 hover:bg-orange-400/10 hover:border-orange-500 w-full"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(234, 88, 12, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Setup Your Company
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;