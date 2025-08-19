import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiCode, FiServer, FiDatabase } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/Modi6090',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/shubham-modi-203141253',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:shubhammodi2003@gmail.com', // better option
      color: 'hover:text-red-500'
    }
  ];

  
};


  const techIcons = [
    { icon: FiCode, label: 'Frontend' },
    { icon: FiServer, label: 'Backend' },
    { icon: FiDatabase, label: 'Database' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl"
      ></motion.div>
      
      <motion.div
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 right-20 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-2xl"
      ></motion.div>

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-8"
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-2"
              >
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  Hello, I'm
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="gradient-text">Shubham</span>
                  <br />
                  <span className="gradient-text">Modi</span>
                </h1>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-3"
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="text-blue-600 dark:text-blue-400">Computer Science</span> Engineering Student
                </h2>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-400">
                  & <span className="text-indigo-600 dark:text-indigo-400">Full Stack Developer</span>
                </h3>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
              >
                Passionate about creating innovative web solutions and turning ideas into reality. 
                I love building user-friendly applications and exploring new technologies with a focus on modern, scalable architecture.
              </motion.p>

              {/* Tech Stack Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-6"
              >
                {techIcons.map((tech, index) => (
                  <div key={tech.label} className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <tech.icon className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-modern flex items-center gap-2 text-base px-8 py-4"
                  >
                    View My Work
                    <FiArrowDown className="animate-bounce" />
                  </motion.button>
                </Link>
                
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline text-base px-8 py-4"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-center space-x-4 pt-4"
              >
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Follow me:
                </span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-icon"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Main Circle */}
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full flex items-center justify-center border border-blue-200/50">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full flex items-center justify-center border border-blue-300/50">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">👨‍💻</div>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          Developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -left-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-blue-200/50"
                >
                  <FiCode className="text-blue-600" size={24} />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -top-8 right-8 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-indigo-200/50"
                >
                  <FiServer className="text-indigo-600" size={24} />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="absolute bottom-8 -right-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-blue-200/50"
                >
                  <FiDatabase className="text-blue-600" size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer p-3 rounded-full glass-effect shadow-modern hover:shadow-premium transition-all duration-300"
          >
            <FiArrowDown className="text-blue-500 dark:text-blue-400 text-xl" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
