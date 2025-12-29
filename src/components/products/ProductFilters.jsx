import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const ProductFilters = () => {
    const [openSections, setOpenSections] = useState({
        type: true,
        department: false,
        specialty: false
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <React.Fragment>
            <div className="lg:hidden flex justify-between items-center bg-white dark:bg-surface-dark p-4 rounded-lg shadow-sm mb-6">
                <h2 className="font-display font-bold text-xl dark:text-white">Filters</h2>
                <button className="text-secondary font-medium text-sm flex items-center">
                    <span className="mr-1">Toggle</span>
                </button>
            </div>
            <div className="hidden lg:block bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 sticky top-24">
                <h2 className="font-display font-bold text-2xl mb-6 text-slate-800 dark:text-white">Filters</h2>
                <div className="mb-8">
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Search Products</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-sm transition-shadow outline-none text-slate-800 dark:text-white"
                            placeholder="Search by Name, Code or Tag"
                        />
                        <Search className="absolute left-3 top-3 text-slate-400" size={18} />
                    </div>
                </div>
                <div className="space-y-4">
                    {/* Product Type */}
                    <div className="border-b border-slate-100 dark:border-slate-700 pb-4">
                        <button
                            className="flex justify-between items-center w-full font-medium text-slate-700 dark:text-slate-200 hover:text-secondary transition-colors"
                            onClick={() => toggleSection('type')}
                        >
                            <span>By Product Type</span>
                            {openSections.type ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {openSections.type && (
                            <div className="text-slate-600 dark:text-slate-400 mt-3 text-sm space-y-2 pl-2 animate-fadeIn">
                                {['ICU Beds', 'Ward Beds', 'Stretchers'].map((item) => (
                                    <label key={item} className="flex items-center space-x-2 cursor-pointer hover:text-secondary">
                                        <input type="checkbox" className="rounded text-secondary focus:ring-secondary border-slate-300 dark:border-slate-600 bg-transparent" />
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Department */}
                    <div className="border-b border-slate-100 dark:border-slate-700 pb-4">
                        <button
                            className="flex justify-between items-center w-full font-medium text-slate-700 dark:text-slate-200 hover:text-secondary transition-colors"
                            onClick={() => toggleSection('department')}
                        >
                            <span>By Department/Room</span>
                            {openSections.department ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {openSections.department && (
                            <div className="text-slate-600 dark:text-slate-400 mt-3 text-sm space-y-2 pl-2 animate-fadeIn">
                                <p className="text-xs italic">Select a department...</p>
                            </div>
                        )}
                    </div>

                    {/* Specialty */}
                    <div>
                        <button
                            className="flex justify-between items-center w-full font-medium text-slate-700 dark:text-slate-200 hover:text-secondary transition-colors"
                            onClick={() => toggleSection('specialty')}
                        >
                            <span>By Medical Specialty</span>
                            {openSections.specialty ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        {openSections.specialty && (
                            <div className="text-slate-600 dark:text-slate-400 mt-3 text-sm space-y-2 pl-2 animate-fadeIn">
                                <p className="text-xs italic">Select a specialty...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductFilters;
