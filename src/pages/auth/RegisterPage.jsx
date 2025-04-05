import React from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import bgImage from "../../assets/bg_image.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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
      <NavBar />

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-gray-100 bg-opacity-90 rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="flex flex-col items-center mb-6">
            <div className=" bg-gray-900 rounded-full mb-4 flex items-center justify-center">
              <img src={logo} alt="" />{" "}
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Set Up Your Office
            </h1>
          </div>

          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Home to Last Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="From Home"
              />
            </div>

            {/* Company Name Field */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Name Here"
              />
            </div>

            {/* Company Website Field */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Company Website <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="website"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Website Here"
              />
            </div>

            {/* Company Size Dropdown */}
            <div>
              <label
                htmlFor="size"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Size <span className="text-red-500">*</span>
              </label>
              <select
                id="size"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Choose Your Company Size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501+">501+ employees</option>
              </select>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Create Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Type Password"
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm..."
              />
            </div>
            <Link 
              to="/login"
              className="flex items-center justify-between mt-1"
            >
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 mt-6"
              >
                continue
              </button>
            </Link>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
