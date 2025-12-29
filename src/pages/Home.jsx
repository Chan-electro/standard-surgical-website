import React from 'react';
import Hero from '../components/home/Hero';
import AboutHighlight from '../components/home/AboutHighlight';
import ProductsPreview from '../components/home/ProductsPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Infrastructure from '../components/home/Infrastructure';
import ContactPreview from '../components/home/ContactPreview';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutHighlight />
            <ProductsPreview />
            <WhyChooseUs />
            <Infrastructure />
            <ContactPreview />
        </>
    );
};

export default Home;
