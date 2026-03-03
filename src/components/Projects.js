import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiGlobe, FiTrendingUp, FiImage, FiFileText } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stock Trading Platform",
      description: "A comprehensive stock trading platform with real-time market data, portfolio management, and trading functionalities. Features include live price updates, technical analysis tools, and user-friendly interface for both beginners and experienced traders.",
      image: "media/stock-trading.png",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io", "Chart.js"],
      github: "https://github.com/Modi6090/Stck-trading-Platform",
      // live: "https://stock-trading-platform-demo.vercel.app",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Image Recognition Website (OCR)",
      description: "An intelligent image recognition website that uses OCR (Optical Character Recognition) technology to extract and process text from images. Features include text extraction, document scanning, and support for multiple image formats.",
      image: "media/image-recon-app.png",
      techStack: ["React.js", "Python", "Flask", "OpenCV", "Tesseract", "Tailwind CSS"],
      github: "https://github.com/Modi6090/image-recon-app",
      // live: "https://image-recon-app.vercel.app/",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Resume Feedback using AI",
      description: "An AI-powered resume analysis tool that provides intelligent feedback and suggestions for improving resumes. Features include skill assessment, ATS optimization, and personalized recommendations for better job applications.",
      image: "media/resume-feedback.png",
      techStack: ["React.js", "Python", "FastAPI", "OpenAI", "NLP", "Machine Learning"],
      github: "https://github.com/Modi6090/resumeFeedback",
      // live: "https://resumefeedback-wrzrat9rkypf3g5frejsrf.streamlit.app/",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Jarvis - Personal Assistant",
      description: "Jarvis - Personal Assistant is an intelligent virtual assistant designed to automate daily tasks, answer queries, and manage schedules using natural language processing. It integrates with various APIs to provide weather updates, reminders, and personalized recommendations, offering a seamless and interactive user experience.",
      image: "media/Jarvis.png",
      techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
      github: "https://github.com/Modi6090/Jarvis",
      // live: "https://blog-api-demo.herokuapp.com",
      category: "Backend"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack':
        return FiGlobe;
      case 'Frontend':
        return FiCode;
      case 'Backend':
        return FiDatabase;
      case 'AI/ML':
        return FiTrendingUp;
      default:
        return FiCode;
    }
  };

  return (
  <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800 px-2 sm:px-0">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience in my development journey.
          </p>
        </motion.div>

  <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white dark:bg-dark-800 px-3 py-1 rounded-full shadow-lg">
                    {React.createElement(getCategoryIcon(project.category), { 
                      size: 16, 
                      className: "text-primary-600 dark:text-primary-400" 
                    })}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-2 sm:space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    <FiGithub size={20} />
                    <span className="font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {/* <FiExternalLink size={20} /> */}
                    {/* <span className="font-medium">Live Demo</span> */}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Modi6090"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <FiGithub size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
