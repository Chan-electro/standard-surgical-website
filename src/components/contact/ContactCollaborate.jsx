import React from 'react';
import { Globe } from 'lucide-react';

const ContactCollaborate = () => {
    return (
        <section className="w-full bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Work With Us</span>
                        <h2 className="font-display text-4xl lg:text-5xl font-medium text-secondary dark:text-white mb-10">
                            Let's Collaborate
                        </h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm text-primary font-medium">Full Name *</label>
                                    <input
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-gray-50 dark:bg-surface-dark transition text-gray-800 dark:text-gray-200"
                                        required type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm text-primary font-medium">Company name *</label>
                                    <input
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-gray-50 dark:bg-surface-dark transition text-gray-800 dark:text-gray-200"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm text-primary font-medium">Phone *</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-3.5 text-gray-400">
                                            <Globe size={18} />
                                        </span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-gray-50 dark:bg-surface-dark transition text-gray-800 dark:text-gray-200"
                                            required type="tel"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm text-primary font-medium">Email *</label>
                                    <input
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-gray-50 dark:bg-surface-dark transition text-gray-800 dark:text-gray-200"
                                        required type="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm text-primary font-medium">Your Message *</label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-gray-50 dark:bg-surface-dark transition h-32 text-gray-800 dark:text-gray-200"
                                ></textarea>
                            </div>
                            <button
                                className="bg-primary hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-orange-500/20 transition transform hover:-translate-y-1 uppercase text-sm tracking-wide"
                                type="button"
                            >
                                Get in touch
                            </button>
                        </form>
                    </div>
                    <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gray-50 dark:bg-surface-dark flex items-center justify-center">
                        <img
                            alt="Collaboration"
                            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL2K9EVh-axR8YEtMDNvXAHXEeDjIhQfSXXoWf8-iwPTOXi3J8lidiKYqTKHUsUXid3PSsBjAkX5AxdMnxkp-7EDAGhLbhWKg36n3DxBHPjv0RKkXA8Gwk8aLbP_u44mc7d8xcpPk0d8esYtSQ9laJQLIRipd5pikaTPcNdHYeATwuLlDQ4fgc0PZJQ-yFo1OLMiHQFSkqNbj9zU-BZsktz6qGuuHpDGdePdwQy-r1gH_3BTE6XbX-fr-sWteN_Jr26qNMAlc5aQ"
                        />
                        <div className="absolute inset-0 bg-secondary/10 dark:bg-black/20 mix-blend-multiply"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCollaborate;
