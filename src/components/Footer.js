import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/Modi6090",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/shubham-modi-203141253",
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      icon: FiMail,
      url: "shubhammodi2003@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full bg-gray-800 dark:bg-dark-800 text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 dark:text-gray-500"
          >
            <p className="text-lg font-medium">
              Crafted with <FiHeart className="inline text-red-500 animate-pulse" /> by{' '}
              <span className="text-white font-bold">Shubham Modi</span>
            </p>
            <p className="text-sm mt-2">
              — Evolving Developer, Lifelong Learner
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-gray-800 dark:border-dark-700"
          >
            <p className="text-gray-500 dark:text-gray-600 text-sm">
              © {new Date().getFullYear()} Shubham Modi. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
