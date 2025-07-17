import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    /* Home Section - Full viewport height with dark mode support */
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-16 px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Flex container - column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 order-2 md:order-1 relative">
            {/* Logo - Added above text on all screens */}
            {/* REPLACE /pictures/logo.png WITH YOUR ACTUAL LOGO PATH */}
            <div className="mb-6 flex items-center">
              <img 
                src="/pictures/logo.png" 
                alt="Cezar Logo"
                className="h-12 mr-3" // Adjust height as needed
              />
              {/* <span className="text-2xl font-bold text-gray-800 dark:text-white">
                Cezar<span className="text-orange-500">💸</span>
              </span> */}
            </div>

            {/* Bulb icon - Now positioned above text on all screens */}
            <div className="mb-4 text-orange-500 animate-pulse">
              <FaLightbulb className="text-4xl" />
            </div>

            {/* Greeting text with orange accent */}
            <h3 className="text-2xl md:text-3xl font-medium mb-4 dark:text-white">
              Hello, my name is{' '}
              <span className="font-clicker text-4xl text-skin">
                Santini <span className="text-orange-500">Cezar</span>
              </span>
            </h3>

            {/* Profession with typing animation and orange cursor */}
            <h3 className="text-2xl md:text-3xl font-medium mb-6 dark:text-white">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Web Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-skin font-semibold"
                style={{ 
                  '--tw-gradient-from': '#f97316', // Orange start
                  '--tw-gradient-to': '#ec1839',   // Your skin color end
                }}
              />
            </h3>

            {/* Description paragraph with orange highlights */}
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              I am a <span className="text-orange-500 font-medium">software developer</span> with extensive experience for over 3 years. My expertise includes <span className="text-orange-500 font-medium">desktop applications</span>, <span className="text-orange-500 font-medium">web development</span>, and <span className="text-orange-500 font-medium">graphic design</span>.
            </p>

            {/* Hire Me button with orange hover effect */}
            <a
              href="https://wa.me/237674404735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-skin text-white rounded-full font-medium hover:bg-orange-500 transition-all hover:scale-105 shadow-lg"
            >
              Hire Me!
            </a>
          </div>

          {/* Right Column - Image (Reduced size) */}
          <div className="md:w-1/2 order-1 md:order-2 relative">
            {/* Profile image container */}
            <div className="relative max-w-md mx-auto border-4 border-skin rounded-lg overflow-hidden shadow-xl">
              {/* REPLACE /pictures/cezar-salim.png WITH YOUR IMAGE PATH */}
              <img
                src="/pictures/cezar-salim.png"
                alt="Santini Cezar"
                className="w-full h-auto scale-95 hover:scale-100 transition-transform" // Reduced size effect
              />
              {/* Orange decorative corners */}
              <div className="absolute -right-4 -bottom-4 w-16 h-16 border-b-4 border-r-4 border-orange-500"></div>
              <div className="absolute -left-4 -top-4 w-16 h-16 border-t-4 border-l-4 border-orange-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;