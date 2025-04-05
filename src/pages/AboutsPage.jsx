import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiGlobe, FiAward, FiHeart } from "react-icons/fi";
import teamImage from "../assets/team.jpg"; // Replace with your team image
import officeImage from "../assets/office.jpg"; // Replace with your office image
import { Link } from "react-router-dom";

const AboutsPage = () => {
  const stats = [
    { value: "50+", label: "Team Members", icon: <FiUsers className="text-3xl" /> },
    { value: "10+", label: "Countries", icon: <FiGlobe className="text-3xl" /> },
    { value: "1000+", label: "Happy Clients", icon: <FiHeart className="text-3xl" /> },
    { value: "15+", label: "Industry Awards", icon: <FiAward className="text-3xl" /> }
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions."
    },
    {
      title: "Integrity",
      description: "Honesty and transparency guide every decision we make."
    },
    {
      title: "Collaboration",
      description: "Great things happen when we work together towards common goals."
    },
    {
      title: "Excellence",
      description: "We strive for perfection in everything we do."
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src={teamImage} 
          alt="Our Team" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div 
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-bright-orange">Our Company</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Pioneering virtual collaboration since 2015
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 p-8 rounded-xl text-center border border-gray-700 hover:border-bright-orange transition-all"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-bright-orange mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-bright-orange">Story</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Founded in 2015, we started as a small team of passionate technologists with a vision to revolutionize remote collaboration. What began as a simple idea has now grown into a global platform serving thousands of businesses worldwide.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our journey hasn't been easy, but through dedication and innovation, we've overcome every challenge to build solutions that truly make a difference in how teams work together.
            </p>
            <Link to="/subscription-plan">
              <motion.button
                className="bg-bright-orange hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Journey
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            className="rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={officeImage} 
              alt="Our Office" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-bright-orange">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-bright-orange transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-bright-orange">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="text-bright-orange">Team Collaboration</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses revolutionizing their workflow with our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/subscription-plan">
              <motion.button
                className="bg-bright-orange hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-all w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="border border-bright-orange text-white font-medium px-8 py-3 rounded-lg transition-all hover:bg-orange-400/10 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutsPage;