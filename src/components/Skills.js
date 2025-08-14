import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiSettings, 
  FiPackage,
  FiMonitor,
  FiSmartphone,
  FiGlobe,
  FiLayers,
  FiZap
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FiMonitor,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: FiServer,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "REST APIs", level: 80 },
        { name: "Authentication", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: FiDatabase,
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 65 },
        { name: "Database Design", level: 75 }
      ]
    },
    {
      title: "DevOps / Tools",
      icon: FiSettings,
      skills: [
        { name: "Docker", level: 60 },
        { name: "Git", level: 80 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "CI/CD", level: 80 }
      ]
    },
    {
      title: "Others",
      icon: FiPackage,
      skills: [
        { name: "JSON", level: 85 },
        { name: "Markdown", level: 80 },
        { name: "Shell Scripting", level: 65 },
        { name: "RESTful APIs", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and expertise across different domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <category.icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Future Skills I'm Learning
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "TypeScript", icon: FiCode },
              { name: "Python", icon: FiZap },
              { name: "CI/CD", icon: FiSettings },
              { name: "Cloud (AWS/Azure)", icon: FiGlobe },
              { name: "Machine Learning", icon: FiLayers },
              { name: "Mobile Development", icon: FiSmartphone },
              { name: "GraphQL", icon: FiDatabase },
              { name: "Microservices", icon: FiServer }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-300"
              >
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg inline-block mb-2">
                  <skill.icon className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
