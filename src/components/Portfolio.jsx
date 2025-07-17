import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRefs = useRef([]);

  const projects = [
    { 
      id: 1, 
      title: "Mobile App Showcase", 
      src: "/videos/Facebook_1718676193103(360p).mp4",
      category: "Mobile Development"
    },
    { 
      id: 2, 
      title: "Web Development", 
      src: "/videos/Facebook_1719600195923(360p).mp4",
      category: "Web Application"
    },
    { 
      id: 3, 
      title: "UI/UX Design", 
      src: "/videos/Facebook_1718817188281(360p).mp4",
      category: "Design Prototype"
    },
    { 
      id: 4, 
      title: "Database System", 
      src: "/videos/Facebook_1723867939912(360p).mp4",
      category: "Backend System"
    },
    { 
      id: 5, 
      title: "Network Solution", 
      src: "/videos/Facebook_1718817645361(360p).mp4",
      category: "Infrastructure"
    },
    { 
      id: 6, 
      title: "Desktop App", 
      src: "/videos/Facebook_1718817645361(360p).mp4",
      category: "Software Development"
    }
  ];

  const toggleVideo = (index) => {
    const video = videoRefs.current[index];
    video.paused ? video.play() : video.pause();
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header with Gradient Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 mb-4">
            Creative Portfolio
          </h2>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interactive showcase of my latest projects and case studies
          </p>
        </motion.div>

        {/* Video Grid with Enhanced Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Video Card with Glow Effect */}
              <motion.div
                className={`relative rounded-2xl overflow-hidden shadow-lg ${
                  hoveredIndex === index 
                    ? 'ring-4 ring-orange-500/50 glow-effect' 
                    : 'ring-1 ring-gray-200 dark:ring-gray-700'
                }`}
                animate={{
                  scale: hoveredIndex === index ? 1.03 : 1,
                  boxShadow: hoveredIndex === index 
                    ? '0 25px 50px -12px rgba(249, 115, 22, 0.25)' 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Video Container */}
                <div className="relative aspect-video bg-gray-900">
                  <video
                    ref={el => videoRefs.current[index] = el}
                    className="w-full h-full object-cover"
                    preload="auto"
                    muted
                    playsInline
                    loop
                    src={project.src}
                  />
                  
                  {/* Dynamic Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                    initial={{ opacity: 0.7 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 0.9 : 0.7,
                    }}
                  />

                  {/* Animated Play Button */}
                  <motion.button
                    onClick={() => toggleVideo(index)}
                    className="absolute inset-0 m-auto w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full backdrop-blur-sm"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 0.95,
                      opacity: hoveredIndex === index ? 1 : 0.9,
                      backgroundColor: hoveredIndex === index 
                        ? 'rgba(249, 115, 22, 0.9)' 
                        : 'rgba(37, 99, 235, 0.9)'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {videoRefs.current[index]?.paused ? (
                      <FaPlay className="text-white text-lg md:text-xl" />
                    ) : (
                      <FaPause className="text-white text-lg md:text-xl" />
                    )}
                  </motion.button>
                </div>

                {/* Enhanced Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <motion.div
                    animate={{
                      y: hoveredIndex === index ? 0 : 10,
                      opacity: hoveredIndex === index ? 1 : 0.9
                    }}
                  >
                    <span className="text-xs md:text-sm font-medium text-orange-400">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <motion.div
                      className="h-1 bg-gradient-to-r from-blue-400 to-orange-500"
                      animate={{
                        width: hoveredIndex === index ? '100%' : '70%'
                      }}
                    />
                  </motion.div>
                </div>

                {/* View Project Link (appears on hover) */}
                <motion.a
                  href="#"
                  className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : -10
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FaExternalLinkAlt className="text-sm" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Custom Glow Effect CSS */}
      <style jsx>{`
        .glow-effect {
          filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.4));
        }
      `}</style>
    </section>
  );
};

export default Portfolio;