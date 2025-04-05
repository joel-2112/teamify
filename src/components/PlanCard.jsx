import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const PlanCard = ({ 
  title, 
  description, 
  price, 
  period, 
  features, 
  cta, 
  recommended = false,
  compact = false 
}) => {
  return (
    <motion.div
      className={`relative rounded-xl ${
        compact ? 'p-4' : 'p-6'
      } ${
        recommended 
          ? 'bg-gray-800/70 border-2 border-bright-orange' 
          : 'bg-gray-800/50 border border-gray-700'
      } h-full flex flex-col`}
      whileHover={{ 
        scale: compact ? 1.02 : 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 15
      }}
    >
      {recommended && (
        <motion.div 
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 500,
            damping: 15,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2
          }}
        >
          Recommended
        </motion.div>
      )}
      
      <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold mb-2 ${
        recommended ? 'text-orange-400' : 'text-white'
      }`}>
        {title}
      </h3>
      
      <p className={`text-gray-300 mb-4 ${compact ? 'text-sm' : ''}`}>
        {description}
      </p>
      
      <div className={`mb-4 ${compact ? 'mb-4' : 'mb-6'}`}>
        <span className={`${compact ? 'text-3xl' : 'text-4xl'} font-bold text-white`}>
          ${price}
        </span>
        {period && <span className="text-gray-400">/{period}</span>}
      </div>
      
      <ul className={`space-y-2 ${compact ? 'mb-4' : 'mb-6'}`}>
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <FiCheck className={`${compact ? 'w-4 h-4 mt-0.5' : 'w-5 h-5 mt-1'} text-orange-400 mr-2 flex-shrink-0`} />
            <span className={`text-gray-300 ${compact ? 'text-sm' : ''}`}>
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <motion.button
          className={`w-full ${
            compact ? 'py-2 text-sm' : 'py-3'
          } rounded-lg font-medium ${
            recommended 
              ? 'bg-bright-orange text-white' 
              : 'bg-gray-700 text-white'
          }`}
          whileHover={{ 
            scale: 1.02,
            backgroundColor: recommended ? "#EA580C" : "#4B5563"
          }}
          whileTap={{ scale: 0.98 }}
        >
          {cta}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PlanCard;