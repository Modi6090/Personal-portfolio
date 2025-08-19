import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiUser, FiBook, FiCode } from 'react-icons/fi';

const About = () => {
  const personalInfo = [
    { icon: FiUser, label: 'Age', value: '20 years' },
    { icon: FiMapPin, label: 'Location', value: 'India' },
    { icon: FiBook, label: 'Education', value: 'Computer Science Engineering' },
    { icon: FiCode, label: 'Learning Style', value: 'Self-Taught Developer' }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Full Stack Development',
      description: 'Self-taught full-stack development using React.js, Node.js, and MongoDB. Built multiple projects to master modern web technologies.'
    },
    {
      year: '2024',
      title: 'Web Development Journey',
      description: 'Started self-learning HTML, CSS, JavaScript and began building web applications. Explored various frameworks and tools.'
    },
    {
      year: '2023',
      title: 'Computer Science Student',
      description: 'Started my Computer Science Engineering journey with a focus on programming fundamentals and problem-solving.'
    },
    {
      year: '2022',
      title: 'First Steps in Tech',
      description: 'Discovered my passion for technology and started exploring programming concepts through online resources and tutorials.'
    }
  ];

  return (
  <section id="about" className="section-padding bg-white dark:bg-dark-900 px-2 sm:px-0">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my self-learning journey, passion, and what drives me in the world of technology.
          </p>
        </motion.div>

  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Personal Information
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg"
                >
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <info.icon className="text-primary-600 dark:text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              My Story
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              <p>
                I'm a passionate Computer Science Engineering student and self-taught full-stack developer 
                with a deep love for creating innovative web solutions. My journey in technology began with 
                curiosity and has evolved into a dedicated pursuit of excellence through self-learning.
              </p>
              <p>
                I believe in the power of hands-on learning, clean code, and user-centered design. 
                Every project I work on is an opportunity to push boundaries and create something 
                meaningful that can make a difference in people's lives.
              </p>
              <p>
                As a self-taught developer, I've learned to be resourceful, persistent, and always 
                eager to learn new technologies. When I'm not coding, you can find me exploring new 
                technologies, contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            My Self-Learning Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-400 to-primary-600"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>
                  {/* Content */}
                  <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'} mb-4 sm:mb-0`}>
                    <div className="bg-white dark:bg-dark-800 p-6 sm:p-8 rounded-lg shadow-lg">
                      <div className="text-primary-600 dark:text-primary-400 font-bold text-base sm:text-lg mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
