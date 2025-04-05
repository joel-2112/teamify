import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const PlanSummary = ({ 
  title,
  price,
  period,
  features,
  isYearly,
  onClose
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
      
      <div className="mb-6 bg-gray-700/50 rounded-lg p-4 border border-gray-600">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-orange-400">{title}</h3>
            <p className="text-gray-400 text-sm">{period}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-white">${price}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-3">Plan Features</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FiCheck className="w-5 h-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    <Link 
     to="/register"
    >
      <button
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
        >
        Continue to Payment
      </button>
          </Link>
    </motion.div>
  );
};

export default PlanSummary;