import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <section className="py-16 lg:py-24 bg-white dark:bg-background-dark transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">OUR MISSION</h4>
                        <h2 className="font-display text-4xl lg:text-5xl font-light text-dark-blue-text dark:text-white leading-tight mb-8">
                            Elevating <span className="text-primary font-semibold">Patient Care</span> <br />
                            Through <span className="text-secondary dark:text-blue-400 font-semibold">Quality</span> <br />
                            <span className="text-secondary dark:text-blue-400 font-semibold">Furniture</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-300 font-light leading-relaxed text-lg">
                            <p>
                                At Standard Surgical Company, our mission is to enhance the healthcare experience by <span className="text-secondary dark:text-blue-300 font-medium">crafting personalized</span>, high-quality
                                hospital furniture solutions that prioritize patient comfort and caregiver efficiency.
                            </p>
                            <p>
                                We are dedicated to exceeding <span className="text-primary font-medium">customer expectations</span> through
                                innovative design, meticulous craftsmanship, and unwavering commitment to customer
                                satisfaction.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl group">
                            <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img
                                alt="Aerial view of modern facility park"
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLwygZF5KZxDmbTqmAgHGxioD_YgErdMX42wySbrNxL8wPnZ358_rpLUh3vCFg32YMBqHil9Vy8-hoTTslOKudvfiBf5O21MsM0mNIM50YApbF69KoqSECqfbtLb_4mpIfOSGyygblj39l333uh2WkIEWNUEx2bqP14vZw-e3zzJs84N3q789L9pti50gx0go3s8shS7XBDNQDN5nEeeAH3QUXr5yOngrQynwer2Ps8-6GCvZ-rq34L0-RH9Ln72VarUbYnuIphQ"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
