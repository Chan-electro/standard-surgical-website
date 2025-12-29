import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <article className="bg-white dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 group flex flex-col h-full overflow-hidden">
            <div className="relative bg-slate-50 dark:bg-slate-800 h-56 p-6 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-300"
                />
                {product.new && (
                    <div className="absolute top-3 right-3">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">New</span>
                    </div>
                )}
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-mono mb-1">SKU: {product.sku}</span>
                <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white leading-tight mb-2 group-hover:text-secondary transition-colors">
                    {product.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                    {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{product.category}</span>
                    <a className="text-sm font-bold text-secondary hover:text-blue-700 dark:hover:text-blue-400 flex items-center gap-1 group/link" href="#">
                        View Details
                        <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
