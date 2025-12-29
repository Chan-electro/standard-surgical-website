import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPreview = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-background-dark transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 dark:border-gray-700">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-secondary dark:bg-gray-900 text-white lg:w-2/5 p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-20"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary rounded-full blur-3xl opacity-40"></div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-display font-bold mb-6">Get in Touch</h3>
                            <p className="text-blue-100 mb-10 leading-relaxed font-light">
                                Have questions about our products or need a custom quote? Our team is ready to assist you.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white/10 p-4 rounded-xl group-hover:bg-white/20 transition">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg mb-1">Head Office & Factory</h5>
                                        <p className="text-sm text-blue-100 font-light">
                                            123 Industrial Area, Phase II,<br />New Delhi, India - 110020
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white/10 p-4 rounded-xl group-hover:bg-white/20 transition">
                                        <Phone />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg mb-1">Call Us</h5>
                                        <p className="text-sm text-blue-100 font-light">+91 98765 43210</p>
                                        <p className="text-sm text-blue-100 font-light">+91 11 2345 6789</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white/10 p-4 rounded-xl group-hover:bg-white/20 transition">
                                        <Mail />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg mb-1">Email Us</h5>
                                        <p className="text-sm text-blue-100 font-light">sales@standardsurgical.com</p>
                                        <p className="text-sm text-blue-100 font-light">info@standardsurgical.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 relative z-10">
                            <p className="mb-4 font-semibold text-sm uppercase tracking-wider text-blue-200">Connect with us</p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-3/5 p-12 lg:p-16 bg-white dark:bg-surface-dark"
                    >
                        <form action="#" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 9876543210"
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message / Requirement</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-primary hover:bg-orange-700 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-orange-500/20 transition transform hover:-translate-y-1 mt-4 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPreview;
