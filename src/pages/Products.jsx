import React, { useEffect, useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';
import { products } from '../data/products';

const Products = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = useMemo(() => {
        const cats = new Set();
        products.forEach(p => {
            if (p.category) {
                p.category.split(',').forEach(c => cats.add(c.trim()));
            }
        });
        return Array.from(cats).sort();
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.sku.toLowerCase().includes(searchQuery.toLowerCase());

            const productCategories = product.category ? product.category.split(',').map(c => c.trim()) : [];
            const matchesCategory = selectedCategories.length === 0 ||
                selectedCategories.some(cat => productCategories.includes(cat));

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategories]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleCategoryToggle = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background-dark">
            <header className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 py-8 lg:py-12 text-center">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Our Catalog</span>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
                        Hospital Furniture & <span className="text-secondary">Infrastructure</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm">
                        Browse our complete range of high-quality surgical and hospital furniture.
                        Select categories to find exactly what your medical facility needs.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:row gap-8 lg:flex-row">
                    <aside className="w-full lg:w-1/4">
                        <ProductFilters
                            categories={categories}
                            selectedCategories={selectedCategories}
                            onCategoryToggle={handleCategoryToggle}
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                        />
                    </aside>

                    <section className="w-full lg:w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-sm font-medium text-slate-500">
                                Showing {paginatedProducts.length} of {filteredProducts.length} products
                            </span>
                        </div>

                        {paginatedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {paginatedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white dark:bg-surface-dark rounded-xl p-12 text-center shadow-sm">
                                <p className="text-slate-500 dark:text-slate-400">No products found matching your criteria.</p>
                                <button
                                    onClick={() => { setSelectedCategories([]); setSearchQuery(''); }}
                                    className="mt-4 text-primary font-semibold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}

                        {totalPages > 1 && (
                            <div className="mt-12 flex justify-center items-center space-x-2">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 disabled:opacity-50"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    let pageNum = i + 1;
                                    // Simple logic for showing pages around current
                                    if (totalPages > 5 && currentPage > 3) {
                                        pageNum = currentPage - 3 + i + 1;
                                        if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                                    }
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => setCurrentPage(pageNum)}
                                            className={`w-10 h-10 rounded-lg font-semibold transition-colors ${currentPage === pageNum
                                                ? 'bg-primary text-white'
                                                : 'bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
                                                }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 disabled:opacity-50"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Products;
