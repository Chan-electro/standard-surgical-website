import React from 'react';
import { motion } from 'framer-motion';

const ArticleCard = ({ article, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-col h-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-lg overflow-hidden cursor-pointer"
        >
            <div className="h-48 overflow-hidden relative">
                {article.trending && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded z-10">
                        TRENDING
                    </div>
                )}
                {article.overlay && (
                    <div className="absolute inset-0 bg-blue-900/10 z-10"></div>
                )}
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-medium text-lg text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {article.excerpt}
                </p>
            </div>
        </motion.article>
    );
};

export default ArticleCard;
