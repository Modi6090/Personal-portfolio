"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiCalendar } from 'react-icons/fi';

const Experience = () => {
    const experiences = [
        {
            type: "work",
            role: "Full Stack Developer (Freelance)",
            company: "Self-Employed",
            duration: "2022 - Present",
            description: "Developing full-stack web applications using React.js, Node.js, and MongoDB. Built 10+ web applications."
        },
        {
            type: "work",
            role: "Web Development Intern",
            company: "Tata Steel",
            duration: "July 2024 - Aug 2024",
            description: "Worked on frontend development tasks, responsive web components, and improved website performance."
        }
    ];

    const education = [
        {
            type: "edu",
            role: "B.Tech in CS & IT",
            company: "ITER SOA University",
            duration: "2021 - 2025",
            description: "Focus on software development, algorithms, and web technologies."
        }
    ];

    const renderTimelineItem = (item, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
        >
            {/* Connection Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 md:hidden"></div>
            <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 md:hidden"></div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            {item.role}
                        </h3>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-700/50 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
                        <FiCalendar /> {item.duration}
                    </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );

    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Resume</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                        Experience & <span className="text-blue-600">Education</span>
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                <FiBriefcase size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Work History</h3>
                        </div>
                        <div className="space-y-8">
                            {experiences.map((item, i) => renderTimelineItem(item, i))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600">
                                <FiBook size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
                        </div>
                        <div className="space-y-8">
                            {education.map((item, i) => renderTimelineItem(item, i))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
