

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaUser, 
  FaList, 
  FaBriefcase, 
  FaComment,
  FaBullhorn,
  FaMapMarkerAlt,
  FaClock,
  FaTimes,
  FaBars
} from 'react-icons/fa';

const Aside = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle link clicks
  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setMobileOpen(false);
    window.location.hash = hash;
  };

  // Navigation items data
  const navItems = [
    { icon: <FaHome />, text: 'Home', href: '#home' },
    { icon: <FaUser />, text: 'About', href: '#about' },
    { icon: <FaList />, text: 'Services', href: '#services' },
    { icon: <FaMapMarkerAlt />, text: 'Other Skills', href: '#other-skills' },
    { icon: <FaBriefcase />, text: 'Portfolio', href: '#portfolio' },
    { icon: <FaBullhorn />, text: 'Buy Course', href: '#buy-course' },
    { icon: <FaComment />, text: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-skin text-white shadow-lg md:hidden"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar Container */}
      <aside className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-900 shadow-xl transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-40 border-r border-gray-200 dark:border-gray-700`}>
        
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <a 
            href="#" 
            className="text-3xl font-bold text-gray-800 dark:text-white hover:text-skin transition-colors"
            onClick={() => handleLinkClick('#home')}
          >
            <span className="font-clicker text-skin">Ce</span>zar💸
          </a>
        </div>

        {/* Time Display */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <FaClock className="mr-3 text-skin" size={18} />
            <span className="font-medium">{currentTime}</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 overflow-y-auto h-[calc(100vh-180px)]">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                    activeLink === item.href 
                      ? 'bg-skin bg-opacity-10 text-skin font-semibold' 
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                >
                  <span className={`mr-3 ${activeLink === item.href ? 'text-skin' : 'text-gray-500 dark:text-gray-400'}`}>
                    {item.icon}
                  </span>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Aside;