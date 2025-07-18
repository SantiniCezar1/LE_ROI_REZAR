import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback, memo } from 'react';
import {
  FaHome, FaUser, FaList, FaBriefcase, FaComment,
  FaBullhorn, FaMapMarkerAlt, FaClock, FaTimes, FaBars
} from 'react-icons/fa';

const Aside = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  // Navigation items configuration
  const navItems = [
    { icon: <FaHome />, text: 'Home', href: '#home' },
    { icon: <FaUser />, text: 'About', href: '#about' },
    { icon: <FaList />, text: 'Services', href: '#services' },
    { icon: <FaMapMarkerAlt />, text: 'Skills', href: '#skills' },
    { icon: <FaBriefcase />, text: 'Portfolio', href: '#portfolio' },
    { icon: <FaBullhorn />, text: 'Courses', href: '#courses' },
    { icon: <FaComment />, text: 'Contact', href: '#contact' }
  ];

 // Time management
const updateTime = useCallback(() => {
  const now = new Date();
  setCurrentTime(now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',  // ✅ Add this line to show seconds
    hour12: true
  }));
}, []);

useEffect(() => {
  updateTime();
  const interval = setInterval(updateTime, 1000);
  return () => clearInterval(interval);
}, [updateTime]);


  // Navigation handling
  const handleLinkClick = useCallback((hash) => {
    setActiveLink(hash);
    setMobileOpen(false);
    const element = document.getElementById(hash.substring(1));
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        onClick={toggleMobileMenu}
        className={`
          fixed top-6 left-6 z-50 p-3 rounded-full
          ${mobileOpen ? 'bg-gray-800' : 'bg-primary-600'}
          text-white shadow-lg md:hidden transition-all
          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary
        `}
        aria-expanded={mobileOpen}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? (
          <FaTimes size={20} className="transition-transform" />
        ) : (
          <FaBars size={20} className="transition-transform" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800
          shadow-xl transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 transition-transform duration-300 ease-in-out z-40
          border-r border-gray-200 dark:border-gray-700
        `}
      >
        {/* Logo header */}
        <div className="p-5 border-b border-gray-200 dark:border-gray-700">
          <Link
            to="/"
            onClick={() => handleLinkClick('#home')}
            className="flex items-center text-2xl font-bold text-gray-800 dark:text-white hover:text-primary-500 transition-colors"
          >
            <span className="text-primary-600 font-serif italic">Ce</span>
            <span className="ml-1">zar</span>
            <span className="text-yellow-500 ml-1" aria-hidden="true">💸</span>
          </Link>
        </div>

        {/* Time display */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center text-gray-600 dark:text-gray-300">
          <FaClock className="text-primary-600 mr-3" />
          <span className="font-medium" aria-live="polite">
            {currentTime}
          </span>
        </div>

        {/* Navigation menu */}
        <nav className="p-4 overflow-y-auto h-[calc(100vh-180px)]">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-all
                    ${activeLink === item.href
                      ? 'bg-primary-100 dark:bg-gray-700 text-primary-600 dark:text-white font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                    hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-primary
                  `}
                  aria-current={activeLink === item.href ? 'page' : undefined}
                >
                  <span className={`
                    text-lg mr-3 transition-colors
                    ${activeLink === item.href
                      ? 'text-primary-600'
                      : 'text-gray-500 dark:text-gray-400'
                    }
                  `}>
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden backdrop-blur-sm transition-opacity"
        />
      )}
    </>
  );
};

export default memo(Aside);