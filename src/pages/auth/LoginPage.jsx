import React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import bgImage from '../../assets/bg_image.png';
const Login = () => {
  return (
    <div 
      className="min-h-screen flex flex-col t"
    
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
    >
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-gray-100 bg-opacity-90 rounded-lg shadow-xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="example@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Enter Your Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="type your password"
              />
              <div className="flex items-center justify-between mt-1">
                <button 
                  type="button" 
                  className="text-sm text-orange-600 hover:text-orange-800 underline"
                >
                  forgot password?
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              Continue
            </button>
          </form>
          
          <p className="mt-6 text-xs text-gray-600 text-center">
            By proceeding you are agreeing to the <br />
            <a href="#" className="text-orange-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-orange-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;