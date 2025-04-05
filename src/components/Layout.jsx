import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import bgImage from "../assets/bg_image.png";

const Layout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay background */}
      <div className="fixed inset-0 -z-10 bg-black/50" /> {/* 50% opacity black overlay */}
      
      {/* Content area */}
      <div className="flex flex-col flex-1">
        <NavBar />
        <Outlet />
        <Footer  /> 
      </div>
    </div>
  );
};

export default Layout;