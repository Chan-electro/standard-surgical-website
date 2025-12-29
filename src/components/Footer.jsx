import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Send, Activity } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="block">
                            <div className="flex items-center gap-2">
                                <Activity className="text-3xl text-white" />
                                <div className="flex flex-col">
                                    <span className="font-display font-bold text-xl tracking-tight text-white uppercase">Standard</span>
                                    <span className="text-[0.55rem] tracking-[0.2em] uppercase text-gray-400 font-semibold">Surgical Company</span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leading manufacturer of premium hospital furniture and medical equipment, dedicated to improving patient care infrastructure since 1994.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> About Us</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Our Products</Link></li>
                            <li><Link to="/manufacturing" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Manufacturing</Link></li>
                            <li><Link to="/quality" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Quality Policy</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Our Products</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/products/icu-beds" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> ICU Beds</Link></li>
                            <li><Link to="/products/fowler-beds" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Fowler Beds</Link></li>
                            <li><Link to="/products/ward-furniture" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Ward Furniture</Link></li>
                            <li><Link to="/products/ot-equipment" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> OT Equipment</Link></li>
                            <li><Link to="/products/wheelchairs" className="hover:text-primary transition flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span> Wheelchairs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on new products and offers.</p>
                        <div className="flex">
                            <input
                                className="bg-gray-800 border-none text-white px-4 py-3 rounded-l-lg w-full focus:ring-1 focus:ring-primary outline-none text-sm placeholder-gray-500"
                                placeholder="Your email"
                                type="email"
                            />
                            <button className="bg-primary hover:bg-orange-600 px-4 py-3 rounded-r-lg transition text-white">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2025 Standard Surgical Company. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
