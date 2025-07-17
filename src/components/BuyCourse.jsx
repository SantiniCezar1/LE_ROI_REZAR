import { motion } from "framer-motion";

const BuyCourse = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-900 to-blue-950" id="buy-course">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Career With Our Courses
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-orange-500 to-blue-400 mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-xl text-blue-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join thousands of students who've launched successful careers with our industry-leading courses
          </motion.p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Course Item 1 */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-orange-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src="pictures/html.jpg" 
                alt="Full Stack Web Development" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">Full Stack Web Development</h3>
                <span className="text-orange-500 font-bold">$300</span>
              </div>
              <p className="text-gray-600 mb-4">Master HTML, CSS, JavaScript, and backend integration to build complete web applications.</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-5">
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <span>3 months</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span>Mentorship</span>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => window.location.href='https://wa.me/237674404735'}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex-1 text-center"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Course Item 2 */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-orange-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src="pictures/graphic.jpg" 
                alt="Data Science Essentials" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">Data Science Essentials</h3>
                <span className="text-orange-500 font-bold">$400</span>
              </div>
              <p className="text-gray-600 mb-4">Master the fundamentals of data science with Python, statistics, and machine learning.</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-5">
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <span>4 months</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span>Mentorship</span>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => window.location.href='https://wa.me/237674404735'}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex-1 text-center"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Course Item 3 */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-orange-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src="pictures/photoshop.jpg" 
                alt="UI/UX Design Principles" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">UI/UX Design Principles</h3>
                <span className="text-orange-500 font-bold">$200</span>
              </div>
              <p className="text-gray-600 mb-4">Learn the core concepts of user interface and user experience design.</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-5">
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <span>2 months</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span>Mentorship</span>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => window.location.href='https://wa.me/237674404735'}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex-1 text-center"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Course Item 4 */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-orange-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src="pictures/wordpress.jpg" 
                alt="Java Programming Masterclass" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">Java Programming Masterclass</h3>
                <span className="text-orange-500 font-bold">$500</span>
              </div>
              <p className="text-gray-600 mb-4">Dive deep into Java programming with hands-on projects and advanced concepts.</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-5">
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <span>5 months</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span>Mentorship</span>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => window.location.href='https://wa.me/237674404735'}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex-1 text-center"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Course Item 5 */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-orange-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src="pictures/PHP(0).png" 
                alt="Machine Learning" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                BESTSELLER
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">Machine Learning</h3>
                <span className="text-orange-500 font-bold">$600</span>
              </div>
              <p className="text-gray-600 mb-4">Explore machine learning techniques and algorithms to build predictive models.</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-5">
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <span>6 months</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span>Mentorship</span>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => window.location.href='https://wa.me/237674404735'}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex-1 text-center"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Course Item 6 */}
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-orange-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src="pictures/database.png" 
                alt="Cybersecurity Essentials" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">Cybersecurity Essentials</h3>
                <span className="text-orange-500 font-bold">$350</span>
              </div>
              <p className="text-gray-600 mb-4">Learn the basics of cybersecurity to protect and secure data and systems.</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-5">
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <span>3 months</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span>Mentorship</span>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => window.location.href='https://wa.me/237674404735'}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex-1 text-center"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Success Stories From Our Students
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">John D.</h4>
                  <p className="text-sm text-gray-500">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The Full Stack course completely transformed my career. Within 3 months of completing it, I landed a job with a 50% salary increase!"
              </p>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl mr-4">
                  SA
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah A.</h4>
                  <p className="text-sm text-gray-500">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The Data Science course gave me practical skills I use every day. The projects were so relevant to real-world problems. Worth every penny!"
              </p>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mr-4">
                  MK
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Michael K.</h4>
                  <p className="text-sm text-gray-500">UI/UX Designer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I went from zero design experience to getting freelance clients after completing the UI/UX course. The mentorship was invaluable."
              </p>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Transform Your Career?</h3>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join our community of successful learners today
          </p>
          <motion.button
            onClick={() => window.location.href='https://wa.me/237674404735'}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyCourse;