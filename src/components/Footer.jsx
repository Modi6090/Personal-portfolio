"use client";

import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <p className="flex items-center justify-center text-slate-600 dark:text-slate-400 gap-1">
                    Made with <FiHeart className="text-red-500 fill-current" /> by <span className="font-bold text-slate-900 dark:text-white">Shubham Modi</span>
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
