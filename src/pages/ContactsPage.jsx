import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import bgImage from "../assets/bg_image.png";
import officeImage from "../assets/contact-office.jpg";
import Footer from "../components/Footer";

const ContactsPage = () => {
  const contactMethods = [
    {
      icon: <FiMapPin className="text-xl text-bright-orange" />,
      title: "Our Headquarters",
      details: " airport road, bole, Addis Ababa, Ethiopia"
    },
    {
      icon: <FiPhone className="text-xl text-bright-orange" />,
      title: "Phone",
      details: "+251920772063"
    },
    {
      icon: <FiMail className="text-xl text-bright-orange" />,
      title: "Email",
      details: "eyueljoel21@gmail.com"
    },
    {
      icon: <FiClock className="text-xl text-bright-orange" />,
      title: "Working Hours",
      details: "Mon-Fri: 2:30 AM - 10:30 AM (Local Time)"
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background with overlay */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-gray-900/80" />

      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section 
          className="max-w-7xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-bright-orange">Us</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have
          </p>
        </motion.section>

        {/* Contact Content */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Our Offices</h2>
            
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-800/60 rounded-lg border border-gray-600"
                  whileHover={{ 
                    borderColor: "#EA580C",
                    backgroundColor: "rgba(17, 24, 39, 0.7)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mt-1">{method.icon}</div>
                  <div>
                    <h3 className="font-medium text-lg text-white">{method.title}</h3>
                    <p className="text-gray-200">{method.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Facebook'].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-300 hover:text-bright-orange transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-800/70 p-8 rounded-xl border border-gray-600 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-200 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700/80 text-white border border-gray-600 rounded-lg focus:border-bright-orange focus:ring-1 focus:ring-bright-orange outline-none transition placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-200 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700/80 text-white border border-gray-600 rounded-lg focus:border-bright-orange focus:ring-1 focus:ring-bright-orange outline-none transition placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-200 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700/80 text-white border border-gray-600 rounded-lg focus:border-bright-orange focus:ring-1 focus:ring-bright-orange outline-none transition placeholder-gray-400"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-200 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700/80 text-white border border-gray-600 rounded-lg focus:border-bright-orange focus:ring-1 focus:ring-bright-orange outline-none transition placeholder-gray-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-bright-orange text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactsPage;