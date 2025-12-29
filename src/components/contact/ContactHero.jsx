import React from 'react';

const ContactHero = () => {
    return (
        <section className="w-full relative bg-white dark:bg-background-dark transition-colors duration-300">
            <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-16 xl:p-24 flex flex-col justify-center order-2 lg:order-1">
                    <div className="mb-8">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Get a Quote</span>
                        <h1 className="font-display text-4xl lg:text-5xl font-medium text-gray-500 dark:text-gray-300 leading-tight">
                            Request a <span className="text-secondary dark:text-blue-400 font-bold">Quote</span> for Your <br className="hidden lg:block" />
                            Next <span className="text-secondary dark:text-blue-400 font-bold">Hospital Project</span>
                        </h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">We'll get back to you with an estimate</p>
                    </div>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm text-primary font-medium">First name *</label>
                                <input
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-surface-dark transition text-gray-800 dark:text-gray-200"
                                    required type="text"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm text-primary font-medium">Last name</label>
                                <input
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-surface-dark transition text-gray-800 dark:text-gray-200"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm text-primary font-medium">Email *</label>
                                <input
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-surface-dark transition text-gray-800 dark:text-gray-200"
                                    required type="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm text-primary font-medium">Phone *</label>
                                <div className="relative">
                                    <input
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-surface-dark transition text-gray-800 dark:text-gray-200"
                                        required type="tel"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm text-primary font-medium">When are you looking to start? *</label>
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-surface-dark transition text-gray-600 dark:text-gray-300"
                            >
                                <option>Immediately</option>
                                <option>In 1 month</option>
                                <option>In 3 months</option>
                                <option>Looking for information</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm text-primary font-medium">What products are you looking for?</label>
                            <textarea
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-surface-dark transition h-24 text-gray-800 dark:text-gray-200"
                                placeholder="Describe your requirements..."
                            ></textarea>
                        </div>
                        <button
                            className="bg-primary hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-orange-500/20 transition transform hover:-translate-y-1 uppercase text-sm tracking-wide w-full md:w-auto"
                            type="button"
                        >
                            Request a Quote
                        </button>
                    </form>
                </div>
                <div className="h-[400px] lg:h-auto w-full relative overflow-hidden order-1 lg:order-2">
                    <img
                        alt="Standard Surgical Facility"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLwygZF5KZxDmbTqmAgHGxioD_YgErdMX42wySbrNxL8wPnZ358_rpLUh3vCFg32YMBqHil9Vy8-hoTTslOKudvfiBf5O21MsM0mNIM50YApbF69KoqSECqfbtLb_4mpIfOSGyygblj39l333uh2WkIEWNUEx2bqP14vZw-e3zzJs84N3q789L9pti50gx0go3s8shS7XBDNQDN5nEeeAH3QUXr5yOngrQynwer2Ps8-6GCvZ-rq34L0-RH9Ln72VarUbYnuIphQ"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
