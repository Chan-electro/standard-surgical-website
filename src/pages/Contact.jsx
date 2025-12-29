import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactCollaborate from '../components/contact/ContactCollaborate';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <ContactHero />
            <ContactInfo />
            <ContactCollaborate />
        </div>
    );
};

export default Contact;
