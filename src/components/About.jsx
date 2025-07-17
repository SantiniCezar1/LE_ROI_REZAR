// import { SiCsharp } from "react-icons/si";


import React from 'react';
import { FaCalendar, FaDownload, FaJs, FaPhp, FaBootstrap, FaDatabase, FaHospital } from 'react-icons/fa';
import { SiCsharp } from '@react-icons/all-files/si/SiCsharp';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';

const About = () => {
  // Personal information data
  const personalInfo = [
    { label: 'Birthday', value: '06 Dec 1998' },
    { label: 'Age', value: '25' },
    { label: 'Website', value: 'www.domain.com' },
    { label: 'Email', value: 'santinidjcezar@gmail.com' },
    { label: 'Degree', value: 'Computer Science' },
    { label: 'Phone', value: '+237 674 404 735' },
    { label: 'City', value: 'Douala' },
    { label: 'Languages', value: 'French/English' },
    { label: 'Religion', value: 'Christian' },
    { label: 'Origin', value: 'Cameroon' },
    { label: 'Relationship', value: 'Single/Searching' },
    { label: 'Job Status', value: 'Available' },
    { label: 'Freelance', value: 'Available' }
  ];

  // Skills data
  const skills = [
    { name: 'JS', percent: 86, icon: <FaJs className="text-yellow-400" /> },
    { name: 'PHP', percent: 66, icon: <FaPhp className="text-purple-500" /> },
    { name: 'HTML', percent: 96, icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'Bootstrap', percent: 76, icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'CSS', percent: 90, icon: <SiCss3 className="text-blue-500" /> },
    { name: 'C#', percent: 60, icon: <SiCsharp className="text-purple-700" /> },
    { name: 'Database', percent: 99, icon: <FaDatabase className="text-blue-400" /> },
    { name: 'Health', percent: 99, icon: <FaHospital className="text-red-500" /> }
  ];

  // Timeline data
  const education = [
    { year: '2022-2023', title: 'Degree in Computer Science', description: 'Specialized in software engineering and web development with honors.' },
    { year: '2023-2024', title: 'Advanced Programming Certification', description: 'Mastered modern frameworks and development methodologies.' },
    { year: '2024-2025', title: 'Cloud Computing Specialization', description: 'Gained expertise in cloud infrastructure and deployment.' }
  ];

  const experience = [
    { year: '2022-2023', title: 'Junior Software Developer', description: 'Developed and maintained web applications for enterprise clients.' },
    { year: '2023-2024', title: 'Full Stack Developer', description: 'Led a team in building scalable SaaS solutions for international markets.' },
    { year: '2024-2025', title: 'Senior Software Engineer', description: 'Architected complex systems and mentored junior developers.' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-skin mx-auto"></div>
        </div>

        {/* About Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            I'm <span className="text-skin">Santini Cezar</span>, <span className="text-orange-500">A Computer and Software Engineer</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I am passionate about developing innovative software solutions and continuously improving my skills in programming and technology. 
            My experience includes working with various programming languages and frameworks, and I thrive on solving complex problems and 
            delivering high-quality results.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm dedicated to leveraging technology to make a positive impact and eager to take on new challenges in the field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Personal Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 border-b pb-2">Personal Info</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300 mr-2">{item.label}:</span>
                  <span className="text-gray-600 dark:text-gray-400">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="https://engineercezarcv.tiiny.site" 
                className="flex items-center px-6 py-3 bg-skin text-white rounded-full hover:bg-orange-500 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="mr-2" /> Download CV
              </a>
              <a 
                href="https://wa.me/237674404735" 
                className="px-6 py-3 border border-skin text-skin rounded-full hover:bg-skin hover:text-white transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me!
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 border-b pb-2">My Skills</h4>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      {skill.icon}
                      <span className="ml-2 font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-skin to-orange-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <FaCalendar className="text-skin mr-3" /> Education
            </h3>
            <div className="space-y-8 relative before:absolute before:left-7 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              {education.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-skin border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <FaCalendar className="mr-2" /> {item.year}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <FaCalendar className="text-skin mr-3" /> Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:left-7 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-skin border-4 border-white dark:border-gray-800"></div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <FaCalendar className="mr-2" /> {item.year}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;