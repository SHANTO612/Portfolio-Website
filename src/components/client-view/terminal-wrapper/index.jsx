'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';
import Terminal from '../terminal';

export default function TerminalWrapper({ data }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-main text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
                aria-label="Toggle Terminal"
            >
                <FaTerminal size={24} />
            </button>

            {/* Terminal Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-2xl shadow-2xl"
                    >
                         <div className="relative">
                            {/* Close Button (Optional, as the toggle also closes it) */}
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-3 -right-3 z-50 bg-red-500 text-white rounded-full p-1.5 shadow-md hover:bg-red-600 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <Terminal data={data} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
