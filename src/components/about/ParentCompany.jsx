import React from 'react';

const ParentCompany = () => {
    return (
        <section className="py-24 bg-white dark:bg-background-dark transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-display text-3xl md:text-5xl font-light text-dark-blue-text dark:text-white mb-4">
                    Our Official <span className="text-primary font-semibold">Parent</span> company
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-16 text-sm">Qasre Enterprise is our official parent company & sales channel</p>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center group">
                        <div className="relative w-32 h-32 mb-6 transform transition-transform duration-500 group-hover:rotate-45">
                            <div className="absolute inset-0 rounded-full border-[12px] border-slate-500 border-r-cyan-500 rotate-45 transform origin-center"></div>
                            <div className="absolute bottom-[-10px] right-[-10px] w-12 h-4 bg-slate-500 rounded-full rotate-45"></div>
                        </div>
                        <div className="text-3xl md:text-5xl tracking-[0.2em] font-sans font-medium text-slate-500">
                            QASR<span className="text-cyan-500 font-bold">E</span>NTERPRISE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParentCompany;
