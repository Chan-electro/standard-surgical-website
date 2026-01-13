import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    const handleBuyNow = () => {
        const phoneNumber = "919686314869";
        const message = `Hello, I am interested in the ${product.title} (Serial Number: ${product.sku}). Please provide more details.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <article className="bg-white dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 group flex flex-col h-full overflow-hidden">
            <div className="relative bg-slate-50 dark:bg-slate-800 h-56 p-6 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60";
                    }}
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-xs text-secondary mb-2">SKU: {product.sku}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {product.category}
                    </span>
                    <button
                        onClick={handleBuyNow}
                        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
