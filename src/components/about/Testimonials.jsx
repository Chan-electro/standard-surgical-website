import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Dr L.Fahmida Banu",
            quote: "Standard Surgical Company's association with our hospital has always been extremely good.",
            details: "They have the ability to convert my thoughts and my surgical demands into reality. As a person passionate about my work I appreciate them for their passion for quality products and workmanship. They also deliver the goods in time which is rare to find.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT1xziHtR2AxlBndgE7P4pAzUqSETx3PkiGTK7ATAwkxLzBtIacgjpAIpamOn_VdpECMn2mafc1lbpXyHkeZFeomEfnX59Yh4RiqkcnuY8LQ5GFKxo8W98ktPkSQrAKQ4ibVFxywM-fINmw8-syWPDAJ3iH98P6w4bFv6lTC9w9dAVVrPq0NnVYlMAofc88s0ZlXQCCoecUY4jxzHVy0xGhV-z4WAN6eswaZEBIughUK0QsU_RFoF-QCDjv7IANFKQsF_7aYqtKA"
        },
        {
            name: "Dr Balaji Goli",
            quote: "Standard Surgical Company defines 'It is an enterprising' company in hospital furniture.",
            details: "I personally visited the manufacturing site; Standard Surgical is obsessed by means of quality in manufacturing process and finished product. The designs of hospital products are based on the user requirements and incorporates every small feature required by medical staff. The products are impeccable even after 15 years of usage.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkvhfal-7ZCCukxcHbZkq7t7J2DVu52CYgKrv8z7zS_lYzoilxw5-sdVsxZjC8j2Wp8vOkvIa9QfWUTUul3maP5t_yoRqJGA2g14eHYafIlmyY57_51zt9XQ7iPW7QkVIjIMSJaSiuqFrra9TE3DyE63x8nqhvYnt7mSH5TNgMz-M1Cdf0Rizzw9qD1jJAVoBdjkuXu-EVfqjLjDIEfRr_qwsp8a6WWjaerj4FJsTan_yeytaLdREmmKEXtN-JCijDWg2byIPIjg"
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-surface-dark border-y border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center md:text-left">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">TESTIMONIALS</h4>
                    <h2 className="font-display text-3xl md:text-4xl font-light text-dark-blue-text dark:text-white">
                        What our <span className="text-secondary dark:text-blue-400 font-semibold">Customers Say</span> about Us...
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white dark:bg-background-dark p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-gray-50 dark:border-gray-700 shadow-inner">
                                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-4xl text-blue-500 mb-4 font-serif">“</span>
                            <h3 className="font-bold text-lg text-primary mb-6">{testimonial.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300 font-light italic text-sm mb-4 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-light text-sm leading-relaxed mb-4">
                                {testimonial.details}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
