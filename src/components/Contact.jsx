"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { Button } from './ui/Button';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                        Contact <span className="text-blue-600">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Talk About Everything!</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            Don't like forms? Send me an email. 👋
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 shrink-0">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Email</h4>
                                    <a href="mailto:shubhammodi2003@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600">
                                        shubhammodi2003@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 shrink-0">
                                    <FiMapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Location</h4>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/Modi6090" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-700/50 rounded-full text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all">
                                    <FiGithub size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/shubham-modi-203141253" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-700/50 rounded-full text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all">
                                    <FiLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 dark:bg-slate-700/30 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Hello..." />
                            </div>

                            <Button variant="primary" className="w-full">
                                Send Message <FiSend />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
