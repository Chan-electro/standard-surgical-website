import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36 bg-gradient-to-b from-blue-50 to-white dark:from-background-dark dark:to-surface-dark transition-colors duration-300">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-0 opacity-5 w-1/2 h-full pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-secondary">
                    <path d="M0 0 L100 0 L100 100 Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 z-10 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-semibold text-secondary dark:text-blue-300 tracking-wide uppercase">Hospital Furniture Specialists</span>
                    </div>

                    <h1 className="font-display font-bold text-5xl lg:text-7xl text-dark-blue-text dark:text-white leading-[1.1]">
                        Excellence in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Medical</span> Infrastructure
                    </h1>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        Standard Surgical Company has been engineering trust since 1994. We manufacture premium hospital beds and furniture that prioritize patient recovery and comfort.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <a href="#products" className="bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-blue-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                            Explore Catalog
                            <ArrowRight size={20} />
                        </a>
                        <a href="/contact" className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-4 px-8 rounded-full shadow-sm transition-colors flex items-center justify-center">
                            Contact Sales
                        </a>
                    </div>

                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 border-t border-gray-200 dark:border-gray-700/50 mt-8">
                        <div className="text-center lg:text-left">
                            <p className="text-3xl font-bold text-dark-blue-text dark:text-white">30+</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Years Exp.</p>
                        </div>
                        <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
                        <div className="text-center lg:text-left">
                            <p className="text-3xl font-bold text-dark-blue-text dark:text-white">500+</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Hospitals Served</p>
                        </div>
                        <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
                        <div className="text-center lg:text-left">
                            <p className="text-3xl font-bold text-dark-blue-text dark:text-white">ISO</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Certified</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 flex justify-center lg:justify-end group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-orange-100 dark:from-blue-900/40 dark:to-orange-900/20 rounded-[3rem] filter blur-3xl opacity-60 transform scale-95 translate-y-4 group-hover:scale-100 transition-transform duration-700"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 aspect-[4/3] w-full max-w-xl">
                        {/* Using the URL from the original HTML */}
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_mrIS0cBJ9bPwlvyWXfNHkm-Q7DW0Wuv1iWfL6INy_GF1pYyTvTpfY1lDOjBM-fpxwMVNudwOplfFNKCflXCiC3p_Czld-qMBV0D78cPXP7pa_XMof16wu8tIDjB0RWHYBO1qHK2ES46jpHDljbkS_dcYaXpsNSIhNECz53T5fx3WnNQfo24fV1Ual8b0TcmAB4plKIXRaePwI2J1CIVvSNkwsqJi20dHyYq1UE3qv06PJTHkrul-z9kreffygzy-nhwOET3jSw"
                            alt="Patient in modern hospital bed"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute bottom-6 left-6 right-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs transition-colors duration-300">
                            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full text-green-600 dark:text-green-300">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-gray-900 dark:text-white">Safety First Design</p>
                                <p className="text-xs text-gray-500">Ergonomic & Durable</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
