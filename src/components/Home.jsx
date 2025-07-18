import React from 'react';
import { FaLightbulb, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-16 px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl ml-0 md:ml-64"> {/* Added ml-64 to account for aside */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content - Left Column */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="mb-6">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                Cezar<span className="text-orange-500">💸</span>
              </span>
            </div>

            <div className="mb-4 text-orange-500 animate-pulse">
              <FaLightbulb className="text-3xl" />
            </div>

            <h3 className="text-2xl md:text-3xl font-medium mb-4 dark:text-white">
              Hello, my name is{' '}
              <span className="font-clicker text-4xl text-skin">
                Santini <span className="text-orange-500">Cezar</span>
              </span>
            </h3>

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
              />
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              I am a <span className="text-orange-500 font-medium">software developer</span> with extensive experience for over 3 years. My expertise includes <span className="text-orange-500 font-medium">desktop applications</span>, <span className="text-orange-500 font-medium">web development</span>, and <span className="text-orange-500 font-medium">graphic design</span>.
            </p>

            <a
              href="https://wa.me/237674404735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-skin text-white rounded-full font-medium hover:bg-orange-500 transition-all hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="mr-2" />
              Hire Me!
            </a>
          </div>

          {/* Image Content - Right Column (Reduced size) */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative max-w-xs mx-auto"> {/* Reduced max-w from md to xs */}
              <img
                src="/pictures/cezar-salim.png"
                alt="Santini Cezar"
                className="w-full h-auto rounded-lg border-4 border-skin shadow-lg transition-transform hover:scale-105"
                loading="lazy"
              />
              <div className="absolute -right-3 -bottom-3 w-12 h-12 border-b-4 border-r-4 border-orange-500"></div>
              <div className="absolute -left-3 -top-3 w-12 h-12 border-t-4 border-l-4 border-orange-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;