"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Stock Trading Platform",
            description: "Real-time market data, portfolio management, and trading functionalities. Features live price updates and technical analysis tools.",
            techStack: ["React.js", "Node.js", "MongoDB", "Socket.io"],
            github: "https://github.com/Modi6090/Stck-trading-Platform",
            category: "Full Stack",
            color: "from-blue-500 to-cyan-400",
            image: "/media/stock-trading.png"
        },
        {
            id: 2,
            title: "Image Recognition (OCR)",
            description: "Intelligent OCR website to extract and process text from images. Supports multiple formats and document scanning.",
            techStack: ["React.js", "Python", "Flask", "OpenCV"],
            github: "https://github.com/Modi6090/image-recon-app",
            category: "AI/ML",
            color: "from-emerald-500 to-teal-400",
            image: "/media/image-recon-app.png"
        },
        {
            id: 3,
            title: "Resume Feedback AI",
            description: "AI-powered tool providing intelligent feedback on resumes using NLP to optimize for ATS and job applications.",
            techStack: ["React.js", "Python", "FastAPI", "OpenAI"],
            github: "https://github.com/Modi6090/resumeFeedback",
            category: "AI/ML",
            color: "from-purple-500 to-indigo-400",
            image: "/media/resume-feedback.png"
        },
        {
            id: 4,
            title: "Jarvis Assistant",
            description: "Voice-activated virtual assistant for task automation, query answering, and schedule management.",
            techStack: ["Node.js", "Express.js", "MongoDB", "NLP"],
            github: "https://github.com/Modi6090/Jarvis",
            category: "Backend",
            color: "from-orange-500 to-amber-400",
            image: "/media/Jarvis.png"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                        Featured <span className="text-blue-600">Projects</span>
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 flex flex-col"
                        >
                            {/* Project Image */}
                            {project.image && (
                                <div className="relative w-full h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}

                            {/* Decorative Gradient Header */}
                            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl text-slate-700 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <FiFolder size={24} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            <FiGithub size={22} />
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                <FiExternalLink size={22} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>

                                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a href="https://github.com/Modi6090" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
                        View all projects on GitHub <FiGithub />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
