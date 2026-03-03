"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiBook, FiCode } from 'react-icons/fi';

const About = () => {
    const personalInfo = [
        { icon: FiUser, label: 'Age', value: '20 years' },
        { icon: FiMapPin, label: 'Location', value: 'India' },
        { icon: FiBook, label: 'Education', value: 'CS Engineering' },
        { icon: FiCode, label: 'Type', value: 'Full Stack Dev' }
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Who I Am</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                        About <span className="text-blue-600">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image or Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
                            <Image
                                src="/media/profile.jpg"
                                alt="Shubham Modi"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-blue-600 bg-opacity-10 dark:bg-opacity-20 z-10 hover:bg-opacity-0 transition-all duration-300"></div>
                        </div>
                        {/* Decorative pattern */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20"></div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Curious Human & <span className="text-blue-600">Passionate Developer</span>
                        </h3>

                        <div className="text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
                            <p>
                                I'm a passionate Computer Science Engineering student and self-taught full-stack developer
                                with a deep love for creating innovative web solutions. My journey in technology began with
                                curiosity and has evolved into a dedicated pursuit of excellence.
                            </p>
                            <p>
                                I believe in the power of hands-on learning, clean code, and user-centered design.
                                Every project I work on is an opportunity to push boundaries and create something
                                meaningful.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {personalInfo.map((info, index) => (
                                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                    <div className="text-blue-600 dark:text-blue-400 text-xl bg-white dark:bg-slate-800 p-2 rounded-full shadow-sm">
                                        <info.icon />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">{info.label}</div>
                                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{info.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
