import { motion } from "framer-motion";

const BuyCourse = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-950 to-blue-900" id="buy-course">
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
          {/* Course Items */}
          {[
            {
              id: 1,
              title: "Full Stack Web Development",
              price: "$300",
              description: "Master HTML, CSS, JavaScript, and backend integration to build complete web applications.",
              duration: "3 months",
              image: "pictures/html.jpg",
              tag: "POPULAR",
              tagColor: "bg-orange-500"
            },
            {
              id: 2,
              title: "Data Science Essentials",
              price: "$400",
              description: "Master the fundamentals of data science with Python, statistics, and machine learning.",
              duration: "4 months",
              image: "pictures/graphic.jpg"
            },
            {
              id: 3,
              title: "UI/UX Design Principles",
              price: "$200",
              description: "Learn the core concepts of user interface and user experience design.",
              duration: "2 months",
              image: "pictures/photoshop.jpg",
              tag: "NEW",
              tagColor: "bg-blue-500"
            },
            {
              id: 4,
              title: "Java Programming Masterclass",
              price: "$500",
              description: "Dive deep into Java programming with hands-on projects and advanced concepts.",
              duration: "5 months",
              image: "pictures/wordpress.jpg"
            },
            {
              id: 5,
              title: "Machine Learning",
              price: "$600",
              description: "Explore machine learning techniques and algorithms to build predictive models.",
              duration: "6 months",
              image: "pictures/PHP(0).png",
              tag: "BESTSELLER",
              tagColor: "bg-green-500"
            },
            {
              id: 6,
              title: "Cybersecurity Essentials",
              price: "$350",
              description: "Learn the basics of cybersecurity to protect and secure data and systems.",
              duration: "3 months",
              image: "pictures/database.png"
            }
          ].map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-orange-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                {course.tag && (
                  <div className={`absolute top-4 right-4 ${course.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {course.tag}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                  <span className="text-orange-500 font-bold">{course.price}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-5">
                  <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                  <span>Mentorship</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => window.location.href='https://wa.me/237674404735'}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-orange-600 hover:to-orange-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex-1 text-center"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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
            {[
              {
                initials: "JD",
                name: "John D.",
                role: "Full Stack Developer",
                quote: "The Full Stack course completely transformed my career. Within 3 months of completing it, I landed a job with a 50% salary increase!",
                bgColor: "bg-blue-100",
                textColor: "text-blue-600"
              },
              {
                initials: "SA",
                name: "Sarah A.",
                role: "Data Scientist",
                quote: "The Data Science course gave me practical skills I use every day. The projects were so relevant to real-world problems. Worth every penny!",
                bgColor: "bg-orange-100",
                textColor: "text-orange-600"
              },
              {
                initials: "MK",
                name: "Michael K.",
                role: "UI/UX Designer",
                quote: "I went from zero design experience to getting freelance clients after completing the UI/UX course. The mentorship was invaluable.",
                bgColor: "bg-green-100",
                textColor: "text-green-600"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center ${testimonial.textColor} font-bold text-xl mr-4`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
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
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-lg text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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