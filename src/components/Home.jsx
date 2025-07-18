import React from 'react';
import { FaLightbulb, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center justify-center py-0 px-4 md:px-8 bg-darkblue-900 text-gray-100"
    >
      <div className="container mx-auto max-w-6xl ml-0 md:ml-64 pt-16 pb-16"> {/* Added pt-16 pb-16 instead of py-16 on section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content - Left Column */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">
                Cezar<span className="text-orange-400">💸</span>
              </span>
            </div>

            <div className="mb-4 text-orange-400 animate-pulse">
              <FaLightbulb className="text-3xl" />
            </div>

            <h3 className="text-2xl md:text-3xl font-medium mb-4 text-white">
              Hello, my name is{' '}
              <span className="font-clicker text-4xl text-blue-300">
                Santini <span className="text-orange-400">Cezar</span>
              </span>
            </h3>

            <h3 className="text-2xl md:text-3xl font-medium mb-6 text-white">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Senior Software Engineer',
                  2000,
                  'Full-Stack Developer',
                  2000,
                  'Solutions Architect',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-blue-300 font-semibold"
              />
            </h3>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I am a <span className="text-orange-400 font-medium">seasoned software engineer</span> with extensive experience for over 3 years. My expertise includes <span className="text-orange-400 font-medium">enterprise applications</span>, <span className="text-orange-400 font-medium">cloud solutions</span>, and <span className="text-orange-400 font-medium">system architecture</span>.
            </p>

            <a
              href="https://wa.me/237674404735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-900 transition-all hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="mr-2" />
              Hire Me!
            </a>
          </div>

          {/* Image Content - Right Column */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative max-w-xs mx-auto">
              <div className="relative group">
                <img
                  src="/pictures/cezar-salim.png"
                  alt="Santini Cezar - Senior Software Engineer"
                  className="w-full h-auto rounded-lg border-4 border-blue-600 shadow-2xl transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-lg group-hover:bg-opacity-0 transition-all duration-300"></div>
                <div className="absolute -right-3 -bottom-3 w-12 h-12 border-b-4 border-r-4 border-orange-400"></div>
                <div className="absolute -left-3 -top-3 w-12 h-12 border-t-4 border-l-4 border-orange-400"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="inline-block px-3 py-1 bg-blue-800 text-white text-sm font-bold rounded-full opacity-90 group-hover:opacity-100 transition-opacity">
                    Senior Software Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;