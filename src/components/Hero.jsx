"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiCode, FiServer, FiDatabase } from 'react-icons/fi';
import { Button } from './ui/Button';

const Hero = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-900 pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/50 dark:bg-blue-900/20 blur-[120px] rounded-full transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100/50 dark:bg-indigo-900/20 blur-[120px] rounded-full transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left space-y-8"
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                    >
                        <motion.div variants={fadeInUp} className="space-y-4">
                            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm tracking-wide">
                                Available for hire
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                                Hello, I'm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Shubham Modi
                                </span>
                            </h1>
                            <h2 className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-light">
                                Computer Science Student & <br className="hidden lg:block" />
                                <span className="font-semibold text-slate-800 dark:text-slate-200">Full Stack Developer</span>
                            </h2>
                        </motion.div>

                        <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            I build pixel-perfect, accessible, and performant web experiences.
                            Currently focused on creating human-centered web applications.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Link to="projects" smooth={true} offset={-80} duration={500}>
                                <Button variant="primary" className="group">
                                    View Components
                                    <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="contact" smooth={true} offset={-80} duration={500}>
                                <Button variant="outline">Contact Me</Button>
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-500 dark:text-slate-400">
                            <a href="https://github.com/Modi6090" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                                <FiGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/shubham-modi-203141253" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                                <FiLinkedin size={24} />
                            </a>
                            <a href="mailto:shubhammodi2003@gmail.com" className="hover:text-blue-600 transition-colors">
                                <FiMail size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Visual Content (Abstract or Image) */}
                    <motion.div
                        className="flex-1 relative hidden lg:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-96 h-96 mx-auto">
                            {/* Abstract decorative circles */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border border-slate-200 dark:border-slate-800 rounded-full"
                            />

                            {/* Central Item - 3D Card or similar */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-3"
                                    >
                                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                                            <FiCode size={24} />
                                        </div>
                                        <span className="font-medium">Frontend</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-3 translate-y-8"
                                    >
                                        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600">
                                            <FiServer size={24} />
                                        </div>
                                        <span className="font-medium">Backend</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-3 col-span-2 w-max mx-auto"
                                    >
                                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 justify-center flex">
                                            <FiDatabase size={24} />
                                        </div>
                                        <span className="font-medium">Full Stack</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
