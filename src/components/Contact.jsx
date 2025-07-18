import { useState } from 'react';
import { gsap } from 'gsap';

const ContactSection = ({ isDarkMode = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Theme configuration
  const themeClasses = {
    container: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    card: isDarkMode ? 'bg-gray-800' : 'bg-white',
    textPrimary: isDarkMode ? 'text-blue-400' : 'text-blue-600',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-300',
    gradientFrom: isDarkMode ? 'from-blue-500' : 'from-blue-600',
    gradientTo: isDarkMode ? 'to-purple-600' : 'to-purple-500',
    modal: isDarkMode ? 'bg-gray-800' : 'bg-white'
  };

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
      const whatsappMessage = `
        *Name:* ${formData.name}
        *Email:* ${formData.email}
        *Subject:* ${formData.subject}
        *Message:*
        ${formData.message}
      `.replace(/^\s+/gm, '');
      
      const encodedMessage = encodeURIComponent(whatsappMessage.trim());
      const whatsappUrl = `https://wa.me/237674404735?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses.container}`}>
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-section">
            <h2 className={`text-4xl font-bold ${themeClasses.textPrimary} mb-4 relative inline-block`}>
              Contact Your Favorite Developer
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gradient-to-r ${themeClasses.gradientFrom} ${themeClasses.gradientTo} rounded-full`}></span>
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Info - Updated grid layout */}
            <div className="flex-1 animate-section" style={{ animationDelay: '0.1s' }}>
              <div className="text-center mb-8">
                <img 
                  src="/pictures/cezar-salim.png" 
                  alt="Cezar Salim" 
                  className="w-24 h-24 rounded-full border-4 border-primary mx-auto shadow-lg transition-transform hover:scale-105"
                />
              </div>
              
              <h3 className={`text-2xl font-semibold ${themeClasses.textPrimary} text-center mb-2`}>Have you any Question?</h3>
              <p className={`${themeClasses.textSecondary} text-center mb-8`}>I'M AT YOUR SERVICE</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: 'phone', text: '+237 674 404 735' },
                  { icon: 'map-marker-alt', text: 'Douala' },
                  { 
                    icon: 'envelope', 
                    text: 'santinidjcezar@gmail.com',
                    className: 'truncate px-2' // Added truncation and padding
                  },
                  { icon: 'globe-africa', text: 'www.domain.com' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`${themeClasses.card} p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1 animate-section`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${themeClasses.gradientFrom} ${themeClasses.gradientTo} text-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <i className={`fas fa-${item.icon} text-xl`}></i>
                    </div>
                    <p className={`${item.className || ''} ${themeClasses.textSecondary} text-center`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form - Simplified without labels */}
            <div className={`flex-1 ${themeClasses.card} p-8 rounded-xl shadow-lg animate-section`} style={{ animationDelay: '0.6s' }}>
              <h3 className={`text-2xl font-semibold ${themeClasses.textPrimary} text-center mb-2`}>SEND ME AN EMAIL</h3>
              <p className={`${themeClasses.textSecondary} text-center mb-6`}>I'M VERY RESPONSIVE TO MESSAGES</p>
              
              <form onSubmit={handleSubmit}>
                {/* Name Field - Simplified */}
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.name ? 'border-red-500' : themeClasses.border}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                {/* Email Field - Simplified */}
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.email ? 'border-red-500' : themeClasses.border}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                {/* Subject Field - Simplified */}
                <div className="mb-4">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.subject ? 'border-red-500' : themeClasses.border}`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                
                {/* Message Field - Adjusted for proper text containment */}
                <div className="mb-6">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary transition ${
                      errors.message ? 'border-red-500' : themeClasses.border
                    } resize-y min-h-[120px] max-h-[300px]`}
                    style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 px-6 bg-gradient-to-r ${themeClasses.gradientFrom} ${themeClasses.gradientTo} text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal remains unchanged */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className={`${themeClasses.modal} rounded-xl p-8 max-w-md w-full text-center relative transform scale-90 animate-scale-up`}>
            <div className="relative inline-block mb-6">
              <i className="fas fa-check-circle text-6xl text-green-500 relative z-10 animate-bounce"></i>
              <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 -z-0 animate-ping"></div>
            </div>
            <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-2`}>Message Sent Successfully!</h3>
            <p className={`${themeClasses.textSecondary} mb-6`}>Thank you for contacting me. I'll get back to you as soon as possible.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className={`px-6 py-2 bg-gradient-to-r ${themeClasses.gradientFrom} ${themeClasses.gradientTo} text-white rounded-lg hover:shadow-md transition`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;