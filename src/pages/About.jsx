import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Mission from '../components/about/Mission';
import Testimonials from '../components/about/Testimonials';
import ParentCompany from '../components/about/ParentCompany';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            {/* About Intro Section */}
            <section className="py-16 lg:py-24 bg-white dark:bg-background-dark overflow-hidden transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-8 order-1 lg:order-1"
                        >
                            <div>
                                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">ABOUT US</h4>
                                <h1 className="font-display text-4xl lg:text-5xl font-light text-dark-blue-text dark:text-white leading-tight mb-8">
                                    We <span className="text-primary font-bold">Build</span> For <br />
                                    Patient <span className="text-secondary dark:text-blue-400 font-bold">Comfort</span>
                                </h1>
                            </div>
                            <div className="relative w-full h-[300px] lg:hidden mb-8 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    alt="Factory Warehouse Interior"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLwygZF5KZxDmbTqmAgHGxioD_YgErdMX42wySbrNxL8wPnZ358_rpLUh3vCFg32YMBqHil9Vy8-hoTTslOKudvfiBf5O21MsM0mNIM50YApbF69KoqSECqfbtLb_4mpIfOSGyygblj39l333uh2WkIEWNUEx2bqP14vZw-e3zzJs84N3q789L9pti50gx0go3s8shS7XBDNQDN5nEeeAH3QUXr5yOngrQynwer2Ps8-6GCvZ-rq34L0-RH9Ln72VarUbYnuIphQ"
                                />
                            </div>
                            <div className="space-y-8">
                                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-light leading-relaxed text-lg">
                                    <p className="mb-6">
                                        For three decades, <span className="font-semibold text-secondary dark:text-blue-400">Standard Surgical Company</span> has been the trusted name in <strong className="font-medium text-gray-800 dark:text-gray-100">hospital furniture</strong>,
                                        providing innovative and reliable solutions to leading healthcare institutions across India.
                                        Based in Hyderabad, our commitment to quality, comfort, and functionality is reflected in
                                        every product we create. We understand the unique needs of the <strong className="font-medium text-gray-800 dark:text-gray-100">healthcare environment</strong> and work tirelessly to ensure that our furniture enhances patient care and staff well-being.
                                    </p>
                                    <p>
                                        We're proud to serve some of the most prestigious hospitals in India, and we remain dedicated to innovation, sustainability, and customer satisfaction.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-dark-blue-text dark:text-white uppercase tracking-wide mb-3">OUR SERVICES</h3>
                                        <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-sm">
                                            With over <span className="font-semibold text-primary">250</span> products, ensuring your hospital's every need is met.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-dark-blue-text dark:text-white uppercase tracking-wide mb-3">EXPERIENCE</h3>
                                        <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-sm">
                                            Our <span className="font-semibold text-primary">30 years</span> of experience make us the preferred choice.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-dark-blue-text dark:text-white uppercase tracking-wide mb-3">ACCOUNTABILITY</h3>
                                        <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-sm">
                                            Avg product shelf life of <span className="font-semibold text-primary">9+ years</span>. Built for longevity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="hidden lg:block h-full relative order-2">
                            <div className="sticky top-28 h-[calc(100vh-8rem)] min-h-[600px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl transform rotate-1"></div>
                                <img
                                    alt="Factory Warehouse Interior"
                                    className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLwygZF5KZxDmbTqmAgHGxioD_YgErdMX42wySbrNxL8wPnZ358_rpLUh3vCFg32YMBqHil9Vy8-hoTTslOKudvfiBf5O21MsM0mNIM50YApbF69KoqSECqfbtLb_4mpIfOSGyygblj39l333uh2WkIEWNUEx2bqP14vZw-e3zzJs84N3q789L9pti50gx0go3s8shS7XBDNQDN5nEeeAH3QUXr5yOngrQynwer2Ps8-6GCvZ-rq34L0-RH9Ln72VarUbYnuIphQ"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <ParentCompany />
            <Mission />
        </React.Fragment>
    );
};

export default About;
