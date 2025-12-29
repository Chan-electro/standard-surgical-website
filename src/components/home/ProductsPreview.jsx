import React from 'react';
import { Bed, Armchair, Stethoscope, Accessibility, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductsPreview = () => {
    const products = [
        {
            title: "ICU Beds",
            description: "Advanced electric beds with multi-function controls for critical care environments.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByphqjY8f-rzFvBuTRUA42wMJuCBhbBIwTXGZC_XpagMZCOwg5hasfzx-w-hn0LeOOOW2k_2p1udr_oZ7stmKfka82MHCXi7p6y5npDnFCIuhvyZq9iNpe6YEYZb-eEj3XlSHWvyeJ70_8PjwV7SPGzSljqkzKsyTp860ptaw8pA2kdJVu9tJ8pqq_ECBKXD5WhzmprMHeOBLtcF8WqBsxg4FvwEydmQCKk171J9OgrS77plCIHhbMOAd2NIUI8gYxxq5mmfx4uQ",
            icon: <Bed size={24} />,
            link: "/products/icu-beds"
        },
        {
            title: "Ward Furniture",
            description: "Bedside lockers, overbed tables, and visitor chairs optimized for patient wards.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYls2dtrUAZ_TaJxN84SVbTHCOTYpY8ey54fs1o_IyJbPEmcEu0LYxXC6wTyHkP3tqPBdi2Mcs4hGAlXJg7bhvkNBCMtY1qyVKH-KLVuArRc91mUenS8S5o4lB13e7kRsasUYOxCLXr49VYBfCs2tjYObQmhl3jeUqqBeds4pGkJ-yojD3Mo_-oaBht6OIFpe4onvDD5UEAcMafMTnTy4Vv8ErfRcfBvM7Si_s6Cd7eKy4zB2B1sCkhl8yqTO3KMm7xmB-o1k54g",
            icon: <Armchair size={24} />,
            link: "/products/ward-furniture"
        },
        {
            title: "Examination Tables",
            description: "Ergonomic tables for outpatient departments and specialized clinics.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj3JGF0soOKu33VmmoHnMeDb2oECXFHiN1dmOTE85FJbsmbr9i2mYAzcGN1ruqGXJjIktE0WnbdxDrjsebW2efy0lYVcgsV9d2Ki-zU7Q2a4C9XPzLllRub3ukmsQZoDPEvNQfhU_U8-8ZEaXCtYk_pwcX3FfpHehw8sZT8HdZOziFycsQIUlQ6ozFfuaLXRLn1S3ax7vSueNnErcx7sJhn-yO14Sb8rbO2HkXOY9Af_NTrBZiHpQveEHfTAFHBjh8NxOXucHBTA",
            icon: <Stethoscope size={24} />,
            link: "/products/examination-tables"
        },
        {
            title: "Mobility Aids",
            description: "Wheelchairs, stretchers, and trolleys designed for safe and easy transport.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzRBk4jYcJEAG6iH22jWGZc-bDQCTtA1-Io8mrpvu0Wd33iyvipiGlqfNf0yBd-khDwf1CE_4BwjFhgWWiVjFHCKWW_qUzJeeT_mRaz16ft-65KvCDquMeUfubfU4Fbun_3FBHsFSbJn0ZekuS8HPqkZyyNmD2riW1uhBAi3cR0o9pzlZSA9KMER_YH3faaPCHq-gte4pRylz5pSLHR2Sfixt2_7Vd8dQ3KEWqaICtk71enLQyt_4CbWyyTxqVQjvQ0xQGestbbw",
            icon: <Accessibility size={24} />,
            link: "/products/mobility-aids"
        }
    ];

    return (
        <section id="products" className="py-24 bg-gray-50 dark:bg-background-dark transition-colors duration-300">
            <div className="container mx-auto px-4 text-center mb-16">
                <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Our Products</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-blue-text dark:text-white mb-6">
                    Comprehensive Medical Solutions
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light text-lg">
                    Discover our wide range of hospital furniture designed to meet the diverse needs of modern healthcare facilities.
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white dark:bg-surface-dark rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
                        >
                            <div className="h-56 overflow-hidden relative bg-gray-100">
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all z-10"></div>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 p-2 rounded-lg text-secondary dark:text-blue-300 shadow-sm z-20">
                                    {product.icon}
                                </div>
                            </div>
                            <div className="p-6 text-left flex-grow flex flex-col">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {product.description}
                                </p>
                                <Link to={product.link} className="text-primary font-semibold text-sm flex items-center hover:gap-2 transition-all">
                                    View Catalog <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <Download size={20} />
                        Download Full Brochure
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsPreview;
