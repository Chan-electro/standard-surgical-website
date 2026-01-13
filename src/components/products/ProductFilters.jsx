import React from 'react';
import { Search } from 'lucide-react';

const ProductFilters = ({
    categories,
    selectedCategories,
    onCategoryToggle,
    searchQuery,
    onSearchChange
}) => {
    return (
        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 sticky top-24">
            <h2 className="font-display font-bold text-2xl mb-6 text-slate-800 dark:text-white">Filters</h2>

            <div className="mb-8">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Search Products</label>
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-sm transition-shadow outline-none text-slate-800 dark:text-white"
                        placeholder="Search by Name or SKU"
                    />
                    <Search className="absolute left-3 top-3 text-slate-400" size={18} />
                </div>
            </div>

            <div className="space-y-4">
                <div className="pb-4">
                    <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-4 flex items-center justify-between">
                        <span>Categories</span>
                        {selectedCategories.length > 0 && (
                            <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">
                                {selectedCategories.length} selected
                            </span>
                        )}
                    </h3>
                    <div className="max-h-[500px] overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
                        {categories.map((category) => (
                            <label
                                key={category}
                                className={`flex items-center space-x-2 cursor-pointer p-2 rounded-lg transition-colors group ${selectedCategories.includes(category)
                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-primary'
                                    : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => onCategoryToggle(category)}
                                    className="rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-600 bg-transparent"
                                />
                                <span className="text-sm font-medium">{category}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFilters;
