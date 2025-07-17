
import React from 'react';
import { 
  FaMobileAlt, 
  FaLaptopCode, 
  FaPaintBrush, 
  FaCode,
  FaNetworkWired,
  FaDatabase,
  FaBolt,
  FaCar,
  FaVideo,
  FaShareAlt,
  FaBullhorn,
  FaTools,
  FaCamera,
  FaChartLine
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Services data
  const services = [
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications with React Native and Flutter for seamless user experiences.",
      color: "text-purple-500"
    },
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Desktop Application",
      description: "Developing efficient desktop software using Electron, Java, and C# for Windows, Mac and Linux.",
      color: "text-blue-500"
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: "Web Design",
      description: "Creating visually stunning, responsive website designs with Figma and Adobe XD that convert visitors.",
      color: "text-pink-500"
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "Web Development",
      description: "Building full-stack web applications with React, Node.js, and modern JavaScript frameworks.",
      color: "text-green-500"
    },
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: "Computer Networking",
      description: "Designing and implementing secure network infrastructure for businesses and organizations.",
      color: "text-orange-500"
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Database Administration",
      description: "Managing and optimizing SQL/NoSQL databases including MySQL, MongoDB and PostgreSQL.",
      color: "text-red-500"
    }
  ];

  // Other skills data
  const otherSkills = [
    {
      icon: <FaBolt className="text-4xl" />,
      title: "Electrical Work",
      description: "Professional electrical installations, repairs and maintenance for homes and businesses.",
      color: "text-yellow-500"
    },
    {
      icon: <FaCar className="text-4xl" />,
      title: "Professional Driving",
      description: "Safe and reliable transportation services with defensive driving certification.",
      color: "text-blue-400"
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: "Painting Services",
      description: "High-quality interior and exterior painting with premium materials and finishes.",
      color: "text-indigo-500"
    },
    {
      icon: <FaBullhorn className="text-4xl" />,
      title: "Digital Marketing",
      description: "Social media management, SEO optimization, and content marketing strategies.",
      color: "text-green-400"
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: "Security Camera Setup",
      description: "Installation and configuration of CCTV and smart home security systems.",
      color: "text-red-400"
    },
    {
      icon: <FaShareAlt className="text-4xl" />,
      title: "Network Configuration",
      description: "Setting up wired and wireless networks for optimal performance and security.",
      color: "text-purple-400"
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Handyman Services",
      description: "General home repairs, maintenance, and improvement solutions.",
      color: "text-amber-500"
    },
    {
      icon: <FaCamera className="text-4xl" />,
      title: "Photography",
      description: "Professional portrait, event, and product photography services.",
      color: "text-cyan-400"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Data Analysis",
      description: "Transforming raw data into actionable insights using Python and Power BI.",
      color: "text-emerald-500"
    }
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Professional Services</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              High-quality solutions tailored to your specific needs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -10 }}
              >
                <div className="p-8 flex flex-col items-center text-center h-full">
                  <div className={`${service.color} mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{service.description}</p>
                  <motion.a
                    href="https://wa.me/237674404735?text=Inquiry%20about%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg transition-all duration-300 flex items-center justify-center font-medium"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(249, 115, 22, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get This Service
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Skills Section */}
      <section id="other-skills" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Additional Skills</h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Versatile capabilities beyond my core technical expertise
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {otherSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
                whileHover={{ y: -10 }}
              >
                <div className="p-8 flex flex-col items-center text-center h-full">
                  <div className={`${skill.color} mb-6`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{skill.description}</p>
                  <motion.a
                    href="https://wa.me/237674404735?text=Inquiry%20about%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:text-white hover:border-orange-500 rounded-lg transition-all duration-300 flex items-center justify-center font-medium"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(249, 115, 22, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Service
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;