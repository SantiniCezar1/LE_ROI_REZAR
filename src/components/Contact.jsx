import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('theme-color-1');
  const [styleSwitcherOpen, setStyleSwitcherOpen] = useState(false);

  // Theme colors configuration
  const themes = [
    { name: 'theme-color-1', primary: '#3a86ff', secondary: '#8338ec' },
    { name: 'theme-color-2', primary: '#ff006e', secondary: '#fb5607' },
    { name: 'theme-color-3', primary: '#38b000', secondary: '#0077b6' },
    { name: 'theme-color-4', primary: '#7209b7', secondary: '#f72585' },
    { name: 'theme-color-5', primary: '#4361ee', secondary: '#4cc9f0' }
  ];

  // Set theme colors dynamically
  useEffect(() => {
    const root = document.documentElement;
    const theme = themes.find(t => t.name === currentTheme);
    
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    
    // Save to localStorage
    localStorage.setItem('theme', currentTheme);
    localStorage.setItem('darkMode', darkMode);
  }, [currentTheme, darkMode]);

  // Check for saved preferences on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'theme-color-1';
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    setCurrentTheme(savedTheme);
    setDarkMode(savedDarkMode);
    
    // Initialize animations
    gsap.from('.animate-section', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      gsap.to('#name', { x: 10, duration: 0.1, yoyo: true, repeat: 5 });
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      gsap.to('#email', { x: 10, duration: 0.1, yoyo: true, repeat: 5 });
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      gsap.to('#email', { x: 10, duration: 0.1, yoyo: true, repeat: 5 });
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      gsap.to('#subject', { x: 10, duration: 0.1, yoyo: true, repeat: 5 });
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      gsap.to('#message', { x: 10, duration: 0.1, yoyo: true, repeat: 5 });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Prepare WhatsApp message
      const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/237674404735?text=${whatsappMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Show success animation
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const setTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Style Switcher */}
      <div className={`fixed right-0 top-1/4 bg-white dark:bg-gray-800 p-4 w-52 rounded-l-lg shadow-lg z-50 transition-transform duration-300 ${styleSwitcherOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          onClick={() => setStyleSwitcherOpen(!styleSwitcherOpen)}
          className="absolute -left-10 top-0 w-10 h-10 bg-gradient-to-r from-primary to-secondary text-white rounded-l-lg flex items-center justify-center"
        >
          <i className="fas fa-cog fa-spin"></i>
        </button>
        
        <h4 className="text-lg font-semibold mb-3 dark:text-white">Theme Colors</h4>
        <div className="flex flex-wrap gap-3 mb-4">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => setTheme(theme.name)}
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: theme.primary }}
              title={theme.name}
            />
          ))}
        </div>
        
        <h4 className="text-lg font-semibold mb-3 dark:text-white">Dark/Light Mode</h4>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={darkMode} 
            onChange={toggleDarkMode} 
            className="sr-only peer" 
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {darkMode ? 'Dark' : 'Light'}
          </span>
        </label>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-section">
            <h2 className="text-4xl font-bold text-primary mb-4 relative inline-block">
              Contact Your Favorite Developer
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Info */}
            <div className="flex-1 animate-section" style={{ animationDelay: '0.1s' }}>
              <div className="text-center mb-8">
                <img 
                  src="/pictures/cezar-salim.png" 
                  alt="Cezar Salim" 
                  className="w-24 h-24 rounded-full border-4 border-primary mx-auto shadow-lg transition-transform hover:scale-105"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-primary text-center mb-2">Have you any Question?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">I'M AT YOUR SERVICE</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1 animate-section" style={{ animationDelay: '0.2s' }}>
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-center dark:text-white">Call Us On</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center">+237 674 404 735</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1 animate-section" style={{ animationDelay: '0.3s' }}>
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-center dark:text-white">Office</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center">Douala</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1 animate-section" style={{ animationDelay: '0.4s' }}>
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-center dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center">santinidjcezar@gmail.com</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1 animate-section" style={{ animationDelay: '0.5s' }}>
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-globe-africa text-xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-center dark:text-white">Website</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center">www.domain.com</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg animate-section" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-semibold text-primary text-center mb-2">SEND ME AN EMAIL</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">I'M VERY RESPONSIVE TO MESSAGES</p>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-4">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                
                <div className="mb-6">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full text-center relative transform scale-90 animate-scale-up">
            <div className="relative inline-block mb-6">
              <i className="fas fa-check-circle text-6xl text-green-500 relative z-10 animate-bounce"></i>
              <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 -z-0 animate-ping"></div>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Thank you for contacting me. I'll get back to you as soon as possible.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Global styles for theme variables */}
      <style jsx global>{`
        :root {
          --primary-color: #3a86ff;
          --secondary-color: #8338ec;
        }
        
        .dark {
          --primary-color: #3a86ff;
          --secondary-color: #8338ec;
        }
        
        .theme-color-1 {
          --primary-color: #3a86ff;
          --secondary-color: #8338ec;
        }
        
        .theme-color-2 {
          --primary-color: #ff006e;
          --secondary-color: #fb5607;
        }
        
        .theme-color-3 {
          --primary-color: #38b000;
          --secondary-color: #0077b6;
        }
        
        .theme-color-4 {
          --primary-color: #7209b7;
          --secondary-color: #f72585;
        }
        
        .theme-color-5 {
          --primary-color: #4361ee;
          --secondary-color: #4cc9f0;
        }
        
        .bg-primary {
          background-color: var(--primary-color);
        }
        
        .bg-secondary {
          background-color: var(--secondary-color);
        }
        
        .text-primary {
          color: var(--primary-color);
        }
        
        .text-secondary {
          color: var(--secondary-color);
        }
        
        .border-primary {
          border-color: var(--primary-color);
        }
        
        .border-secondary {
          border-color: var(--secondary-color);
        }
        
        .from-primary {
          --tw-gradient-from: var(--primary-color);
          --tw-gradient-to: rgba(58, 134, 255, 0);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        
        .to-secondary {
          --tw-gradient-to: var(--secondary-color);
        }
        
        .focus\:ring-primary:focus {
          --tw-ring-color: var(--primary-color);
        }
        
        @keyframes scale-up {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-scale-up {
          animation: scale-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;