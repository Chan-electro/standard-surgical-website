import React from 'react';
import { PaintBucket, Cpu, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

const Infrastructure = () => {
    return (
        <section className="py-24 bg-white dark:bg-surface-dark transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <div className="flex items-center gap-3">
                            <span className="h-px w-12 bg-primary"></span>
                            <span className="text-primary font-bold uppercase tracking-widest text-xs">Our Infrastructure</span>
                        </div>
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-dark-blue-text dark:text-white leading-tight">
                            Precision Engineering meets Skilled Craftsmanship
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg font-light">
                            Our manufacturing facility is the heart of our operations. Spanning a vast area, it houses the latest machinery for cutting, bending, welding, and finishing.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <PaintBucket className="text-primary" size={32} />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">Automated Powder Coating</h4>
                                    <p className="text-xs text-gray-500">For superior finish & longevity</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <Cpu className="text-primary" size={32} />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">Robotized Welding</h4>
                                    <p className="text-xs text-gray-500">Ensures structural integrity</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <FlaskConical className="text-primary" size={32} />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">Strict Quality Control</h4>
                                    <p className="text-xs text-gray-500">Rigorous testing labs</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5BvKw1QR41rTDRVh4nniMLTRODMre-3bU_oC9jnGaAExxCeoP6Baysbia3SAtbfqCKPZwpHNfvBP-WKheDMKgWIn4TSCAC5oHm3Qu7n96QrOtri3iMQD8KGeBZSVP6JPVzEGUfem1-Tm4nh3nUjtMgKu1HB9iQA-QfokPKEGMOhHFcpIKp39Q8Oj2hVDq8MDBjk3QXPcWcIhUfykw4CGGrwxpCzp7IPX_mfoTE5HYLLX46wi9tJmrHurO8nvZKwJFsUnmzEknIg"
                                alt="Factory Worker"
                                className="rounded-2xl shadow-md w-full h-56 object-cover hover:shadow-xl transition-shadow duration-300"
                            />
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL2K9EVh-axR8YEtMDNvXAHXEeDjIhQfSXXoWf8-iwPTOXi3J8lidiKYqTKHUsUXid3PSsBjAkX5AxdMnxkp-7EDAGhLbhWKg36n3DxBHPjv0RKkXA8Gwk8aLbP_u44mc7d8xcpPk0d8esYtSQ9laJQLIRipd5pikaTPcNdHYeATwuLlDQ4fgc0PZJQ-yFo1OLMiHQFSkqNbj9zU-BZsktz6qGuuHpDGdePdwQy-r1gH_3BTE6XbX-fr-sWteN_Jr26qNMAlc5aQ"
                                alt="Welding"
                                className="rounded-2xl shadow-md w-full h-56 object-cover mt-12 hover:shadow-xl transition-shadow duration-300"
                            />
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwIem_U190TsDLGK9h3U63vtO9uUF9CivSug3tjX-CgW4FgbHtA1g5j80JeGUqhLn7KJtxDwhxyB_1_8Eqj1-Coq__xEBkYDeKckvzbHBD_E7LJk-r_ENyQm73ILC3Ntr1eW3WkwTGiYI5dMm3_FwmEYxwHIQTdWXHoXPu7NlEjYvO1RjtUqiyAJlfIxMZjZIAnhvBVOn7gb6EXOjlqahi6zfrAolwgufxAUxFvdFKivJ55PYRr9zai1JPdnywxCo8M3zn5GZzQg"
                                alt="Manufacturing"
                                className="rounded-2xl shadow-md w-full h-56 object-cover -mt-12 hover:shadow-xl transition-shadow duration-300"
                            />
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOR3r0gw00bNYmZu07i_2BGtcngSKbXyzvIzlnaQdhWQQNSd764Mu8yroM7Vi19b39aE2w6o8opPD-kKvXtIkbKm64XNDTXmRtvVLBGvI6-Mzw-UjoyCmlo8sVC3EjBgwrrGXxsM9w0ysNERg1LzFdhVq1eNjFIk9Mg151shXH9RY9yBfC3mAMMnW7Qllh1EU-75ZutkVJiAWYfR70QjGmovA4vdgDGbfBn1HozZwOSk_gJBtajhdfIVibuERdDuM8IK3ZIBq4bQ"
                                alt="Finished Goods"
                                className="rounded-2xl shadow-md w-full h-56 object-cover hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
