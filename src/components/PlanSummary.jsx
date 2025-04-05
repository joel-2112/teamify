import React from 'react';

const PlanSummary = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Order Summary</h2>
      
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-500 mb-3">Select Plan</h3>
        
        {/* Standard Plan */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-3 hover:border-orange-300 transition-colors">
          <div>
            <h4 className="font-semibold text-gray-800">Standard</h4>
            <p className="text-sm text-gray-500">Per Minute</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-800">$1000</p>
            <p className="text-sm text-gray-500 line-through">$1000</p>
          </div>
        </div>
        
        {/* Premium Plan */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
          <div>
            <h4 className="font-semibold text-gray-800">Premium</h4>
            <p className="text-sm text-gray-500">Per Minute</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-800">$1800</p>
            <p className="text-sm text-gray-500 line-through">$1800</p>
          </div>
        </div>
      </div>
      
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 mt-4">
        Continue 
      </button>
    </div>
  );
};

export default PlanSummary;