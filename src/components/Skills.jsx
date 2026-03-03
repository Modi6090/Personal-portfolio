"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    FiMonitor, FiServer, FiDatabase, FiSettings, FiPackage, FiZap, FiCode, FiGlobe, FiLayers, FiSmartphone
} from 'react-icons/fi';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: FiMonitor,
            skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
        },
        {
            title: "Backend",
            icon: FiServer,
            skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "AWS (Basic)"]
        },
        {
            title: "Database",
            icon: FiDatabase,
            skills: ["MongoDB", "SQL", "Database Design"]
        },
        {
            title: "Tools & DevOps",
            icon: FiSettings,
            skills: ["Git", "Postman", "VS Code", "Docker (Learning)", "CI/CD (Basic)"]
        },
    ];

    const learning = [
        { name: "Terraform", icon: FiCode },
        { name: "Python", icon: FiZap },
        { name: "Machine Learning", icon: FiLayers },
        { name: "Microservices", icon: FiServer }
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">My Arsenal</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                        Technical <span className="text-blue-600">Skills</span>
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700"
                        >
                            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                                <category.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-600">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-center text-xl font-bold text-slate-700 dark:text-slate-300 mb-8">Currently Exploring</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {learning.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200">
                                <item.icon className="text-blue-500" />
                                <span className="font-medium">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
