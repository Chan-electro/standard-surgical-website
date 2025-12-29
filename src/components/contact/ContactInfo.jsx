import React from 'react';

const ContactInfo = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-surface-dark border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-4">Contact Us</span>
                    <h2 className="font-display font-medium text-3xl text-dark-blue-text dark:text-white">
                        For any inquiries or questions contact us:
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark shadow-sm">
                    <div className="p-8 lg:p-12 text-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center h-full hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300">
                        <h3 className="text-secondary dark:text-blue-400 font-bold uppercase tracking-wider text-sm mb-6">Address</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                            Plot No. M-12, Medical Devices Park,<br />
                            Sultanpur, Sangareddy Dist.,<br />
                            Telangana, India - 502319
                        </p>
                    </div>
                    <div className="p-8 lg:p-12 text-center border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center h-full hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300">
                        <h3 className="text-secondary dark:text-blue-400 font-bold uppercase tracking-wider text-sm mb-6">Office Hours</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                            Monday - Saturday:<br />
                            9:00 AM - 5:30 PM
                        </p>
                    </div>
                    <div className="p-8 lg:p-12 text-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center h-full hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300">
                        <h3 className="text-secondary dark:text-blue-400 font-bold uppercase tracking-wider text-sm mb-6">Email</h3>
                        <a
                            className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm hover:text-primary transition"
                            href="mailto:contact@standardsurgical.com"
                        >
                            contact@standardsurgical.com
                        </a>
                    </div>
                    <div className="p-8 lg:p-12 text-center flex flex-col items-center justify-center h-full hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300">
                        <h3 className="text-secondary dark:text-blue-400 font-bold uppercase tracking-wider text-sm mb-6">Phone</h3>
                        <a
                            className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm hover:text-primary transition"
                            href="tel:+917702866176"
                        >
                            +91 77028 66176
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
