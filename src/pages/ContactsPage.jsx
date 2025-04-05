import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import officeImage from "../assets/contact-office.jpg"; // Replace with your image
import { Link } from "react-router-dom";

const ContactsPage = () => {
  const contactMethods = [
    {
      icon: <FiMapPin className="text-xl text-bright-orange" />,
      title: "Our Headquarters",
      details: "123 Business Ave, Tech District, San Francisco, CA 94107"
    },
    {
      icon: <FiPhone className="text-xl text-bright-orange" />,
      title: "Phone",
      details: "+25192077263"
    },
    {
      icon: <FiMail className="text-xl text-bright-orange" />,
      title: "Email",
      details: "eyueljoel21@gmail.com"
    },
    {
      icon: <FiClock className="text-xl text-bright-orange" />,
      title: "Working Hours",
      details: "Mon-Fri: 9AM - 6PM (LT)"
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in <span className="text-bright-orange">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We'd love to hear from you. Reach out to our team anytime.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                  whileHover={{ borderColor: "#EA580C" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mt-1">{method.icon}</div>
                  <div>
                    <h3 className="font-medium text-lg">{method.title}</h3>
                    <p className="text-gray-300">{method.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Facebook'].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
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
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-bright-orange focus:ring-1 focus:ring-bright-orange outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-bright-orange focus:ring-1 focus:ring-bright-orange outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-bright-orange focus:ring-1 focus:ring-bright-orange outline-none transition"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-bright-orange focus:ring-1 focus:ring-bright-orange outline-none transition"
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
      </section>

      {/* Office Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={officeImage} 
              alt="Our Office" 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;