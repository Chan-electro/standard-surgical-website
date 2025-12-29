import React from 'react';
import { ShieldCheck, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutHighlight = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-surface-dark relative transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1 relative pl-8 pb-8"
                    >
                        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 dark:bg-orange-900/20 rounded-full -z-0"></div>
                        <div className="absolute bottom-0 right-12 w-48 h-48 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-0"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLwygZF5KZxDmbTqmAgHGxioD_YgErdMX42wySbrNxL8wPnZ358_rpLUh3vCFg32YMBqHil9Vy8-hoTTslOKudvfiBf5O21MsM0mNIM50YApbF69KoqSECqfbtLb_4mpIfOSGyygblj39l333uh2WkIEWNUEx2bqP14vZw-e3zzJs84N3q789L9pti50gx0go3s8shS7XBDNQDN5nEeeAH3QUXr5yOngrQynwer2Ps8-6GCvZ-rq34L0-RH9Ln72VarUbYnuIphQ"
                            alt="Hospital interior"
                            className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                        />
                        <div className="absolute top-10 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-20 max-w-[200px]">
                            <p className="text-xs text-gray-500 mb-1">Our Heritage</p>
                            <p className="font-bold text-secondary dark:text-white leading-tight">Setting Standards since 1994</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-12 bg-primary"></span>
                            <span className="text-primary font-bold uppercase tracking-widest text-xs">About Us</span>
                        </div>
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-dark-blue-text dark:text-white mb-8 leading-tight">
                            Pioneering Health Care Furniture
                        </h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                            <p>
                                At <span className="font-semibold text-secondary dark:text-blue-400">Standard Surgical Company</span>, we believe that recovery begins with comfort. For over three decades, we have dedicated ourselves to manufacturing world-class hospital beds and medical furniture that combine durability, ergonomic design, and patient safety.
                            </p>
                            <p>
                                Our mission is to empower healthcare facilities across India with infrastructure that supports healing. From modest beginnings, we have grown into a trusted industry leader, recognized for our commitment to quality and innovation.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-10">
                            <div className="flex flex-col gap-2">
                                <span className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 flex items-center justify-center rounded-lg text-secondary dark:text-blue-300">
                                    <ShieldCheck size={24} />
                                </span>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">ISO Certified</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">International Quality Standards met rigorously.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="bg-orange-50 dark:bg-orange-900/30 w-12 h-12 flex items-center justify-center rounded-lg text-primary">
                                    <Factory size={24} />
                                </span>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">In-House Mfg</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Complete Quality Control from raw material to finish.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHighlight;
