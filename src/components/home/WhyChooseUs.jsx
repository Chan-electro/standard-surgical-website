import React from 'react';
import { Award, Factory, Truck, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const features = [
        {
            title: "3 Decades of Excellence",
            description: "Established in 1994, our longevity is a testament to our consistent quality.",
            icon: <Award size={32} />
        },
        {
            title: "State-of-Art Facility",
            description: "Advanced manufacturing unit equipped with CNC machines for precision.",
            icon: <Factory size={32} />
        },
        {
            title: "Pan-India Delivery",
            description: "Robust logistics network ensuring timely delivery and installation.",
            icon: <Truck size={32} />
        },
        {
            title: "Customer First",
            description: "Dedicated after-sales support and warranty services.",
            icon: <Headset size={32} />
        }
    ];

    return (
        <section className="py-24 bg-secondary dark:bg-secondary-dark text-white relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">Why Choose Standard Surgical?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg font-light">
                        We don't just manufacture furniture; we engineer trust. Here is why leading hospitals prefer us.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition duration-300 group"
                        >
                            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 text-orange-300 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                            <p className="text-sm text-blue-100 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
