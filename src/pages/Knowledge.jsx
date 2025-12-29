import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ArticleCard from '../components/knowledge/ArticleCard';

const Knowledge = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        "All Posts",
        "Hospital Furniture",
        "Pediatric Care Solutions",
        "Geriatric & Palliative Care",
        "Patient Safety & Comfort",
        "ICU & Ward Equipment"
    ];

    const articles = [
        {
            title: "Why a Baby Cradle Matters in Modern Hospitals and Maternity...",
            excerpt: "A hospital baby cradle designed for newborn safety and comfort, featuring smooth rocking, soft...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYls2dtrUAZ_TaJxN84SVbTHCOTYpY8ey54fs1o_IyJbPEmcEu0LYxXC6wTyHkP3tqPBdi2Mcs4hGAlXJg7bhvkNBCMtY1qyVKH-KLVuArRc91mUenS8S5o4lB13e7kRsasUYOxCLXr49VYBfCs2tjYObQmhl3jeUqqBeds4pGkJ-yojD3Mo_-oaBht6OIFpe4onvDD5UEAcMafMTnTy4Vv8ErfRcfBvM7Si_s6Cd7eKy4zB2B1sCkhl8yqTO3KMm7xmB-o1k54g"
        },
        {
            title: "Why a Single Footstep Is a Must-Have for Patient Safety in Hospitals",
            excerpt: "The Single Footstep P/C with SS Top is a compact yet sturdy hospital accessory that enhances patient...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOR3r0gw00bNYmZu07i_2BGtcngSKbXyzvIzlnaQdhWQQNSd764Mu8yroM7Vi19b39aE2w6o8opPD-kKvXtIkbKm64XNDTXmRtvVLBGvI6-Mzw-UjoyCmlo8sVC3EjBgwrrGXxsM9w0ysNERg1LzFdhVq1eNjFIk9Mg151shXH9RY9yBfC3mAMMnW7Qllh1EU-75ZutkVJiAWYfR70QjGmovA4vdgDGbfBn1HozZwOSk_gJBtajhdfIVibuERdDuM8IK3ZIBq4bQ"
        },
        {
            title: "B-Type Oxygen Cylinder Trolley – Safe, Stable & Effortless Mobility",
            excerpt: "The B-Type Oxygen Cylinder Trolley ensures safe and smooth handling of oxygen cylinders in hospitals...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzRBk4jYcJEAG6iH22jWGZc-bDQCTtA1-Io8mrpvu0Wd33iyvipiGlqfNf0yBd-khDwf1CE_4BwjFhgWWiVjFHCKWW_qUzJeeT_mRaz16ft-65KvCDquMeUfubfU4Fbun_3FBHsFSbJn0ZekuS8HPqkZyyNmD2riW1uhBAi3cR0o9pzlZSA9KMER_YH3faaPCHq-gte4pRylz5pSLHR2Sfixt2_7Vd8dQ3KEWqaICtk71enLQyt_4CbWyyTxqVQjvQ0xQGestbbw"
        },
        {
            title: "Why Do Humans Dream?",
            excerpt: "Dreams are one of the brain's most fascinating mysteries. From memory processing and emotion...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_mrIS0cBJ9bPwlvyWXfNHkm-Q7DW0Wuv1iWfL6INy_GF1pYyTvTpfY1lDOjBM-fpxwMVNudwOplfFNKCflXCiC3p_Czld-qMBV0D78cPXP7pa_XMof16wu8tIDjB0RWHYBO1qHK2ES46jpHDljbkS_dcYaXpsNSIhNECz53T5fx3WnNQfo24fV1Ual8b0TcmAB4plKIXRaePwI2J1CIVvSNkwsqJi20dHyYq1UE3qv06PJTHkrul-z9kreffygzy-nhwOET3jSw",
            trending: true,
            overlay: true
        },
        {
            title: "What Are the Chances of Survival After Going to the ICU?",
            excerpt: "What are the true chances of survival after being admitted to the ICU? This article explains how...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByphqjY8f-rzFvBuTRUA42wMJuCBhbBIwTXGZC_XpagMZCOwg5hasfzx-w-hn0LeOOOW2k_2p1udr_oZ7stmKfka82MHCXi7p6y5npDnFCIuhvyZq9iNpe6YEYZb-eEj3XlSHWvyeJ70_8PjwV7SPGzSljqkzKsyTp860ptaw8pA2kdJVu9tJ8pqq_ECBKXD5WhzmprMHeOBLtcF8WqBsxg4FvwEydmQCKk171J9OgrS77plCIHhbMOAd2NIUI8gYxxq5mmfx4uQ"
        },
        {
            title: "Best Over Bed Instrument Trolleys in India: Features, Benefits & Specifications",
            excerpt: "Over bed instrument trolleys play a crucial role in hospital workflows, ensuring smooth mobility, hygien...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj3JGF0soOKu33VmmoHnMeDb2oECXFHiN1dmOTE85FJbsmbr9i2mYAzcGN1ruqGXJjIktE0WnbdxDrjsebW2efy0lYVcgsV9d2Ki-zU7Q2a4C9XPzLllRub3ukmsQZoDPEvNQfhU_U8-8ZEaXCtYk_pwcX3FfpHehw8sZT8HdZOziFycsQIUlQ6ozFfuaLXRLn1S3ax7vSueNnErcx7sJhn-yO14Sb8rbO2HkXOY9Af_NTrBZiHpQveEHfTAFHBjh8NxOXucHBTA"
        },
        {
            title: "How Long Can the Brain Survive Without Oxygen?",
            excerpt: "The human brain is one of the most delicate and energy-hungry organs in the body. Although it makes up...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5BvKw1QR41rTDRVh4nniMLTRODMre-3bU_oC9jnGaAExxCeoP6Baysbia3SAtbfqCKPZwpHNfvBP-WKheDMKgWIn4TSCAC5oHm3Qu7n96QrOtri3iMQD8KGeBZSVP6JPVzEGUfem1-Tm4nh3nUjtMgKu1HB9iQA-QfokPKEGMOhHFcpIKp39Q8Oj2hVDq8MDBjk3QXPcWcIhUfykw4CGGrwxpCzp7IPX_mfoTE5HYLLX46wi9tJmrHurO8nvZKwJFsUnmzEknIg"
        },
        {
            title: "Why Comfortable & Durable Waiting Area Seating Matters in Hospitals",
            excerpt: "Discover how high-density PU waiting area chairs with robust metal support enhance comfort...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLwygZF5KZxDmbTqmAgHGxioD_YgErdMX42wySbrNxL8wPnZ358_rpLUh3vCFg32YMBqHil9Vy8-hoTTslOKudvfiBf5O21MsM0mNIM50YApbF69KoqSECqfbtLb_4mpIfOSGyygblj39l333uh2WkIEWNUEx2bqP14vZw-e3zzJs84N3q789L9pti50gx0go3s8shS7XBDNQDN5nEeeAH3QUXr5yOngrQynwer2Ps8-6GCvZ-rq34L0-RH9Ln72VarUbYnuIphQ"
        },
        {
            title: "What Happens If You Don’t Sleep for 48 Hours?",
            excerpt: "Sleep is one of the most essential needs of the human body. Just like food, water, and oxygen, quality...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_mrIS0cBJ9bPwlvyWXfNHkm-Q7DW0Wuv1iWfL6INy_GF1pYyTvTpfY1lDOjBM-fpxwMVNudwOplfFNKCflXCiC3p_Czld-qMBV0D78cPXP7pa_XMof16wu8tIDjB0RWHYBO1qHK2ES46jpHDljbkS_dcYaXpsNSIhNECz53T5fx3WnNQfo24fV1Ual8b0TcmAB4plKIXRaePwI2J1CIVvSNkwsqJi20dHyYq1UE3qv06PJTHkrul-z9kreffygzy-nhwOET3jSw",
            overlay: true
        },
        {
            title: "Hospital Wards & Furniture Requirements (2025)",
            excerpt: "Hospital wards are the core of patient care, and each type requires specialized furniture for safety...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYls2dtrUAZ_TaJxN84SVbTHCOTYpY8ey54fs1o_IyJbPEmcEu0LYxXC6wTyHkP3tqPBdi2Mcs4hGAlXJg7bhvkNBCMtY1qyVKH-KLVuArRc91mUenS8S5o4lB13e7kRsasUYOxCLXr49VYBfCs2tjYObQmhl3jeUqqBeds4pGkJ-yojD3Mo_-oaBht6OIFpe4onvDD5UEAcMafMTnTy4Vv8ErfRcfBvM7Si_s6Cd7eKy4zB2B1sCkhl8yqTO3KMm7xmB-o1k54g"
        },
        {
            title: "What Makes the Baby Cradle P/C (Rocking) an Essential Part of Mother Care",
            excerpt: "The Baby Cradle P/C (Rocking) combines comfort, safety, and easy mobility for newborns, making it a...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj3JGF0soOKu33VmmoHnMeDb2oECXFHiN1dmOTE85FJbsmbr9i2mYAzcGN1ruqGXJjIktE0WnbdxDrjsebW2efy0lYVcgsV9d2Ki-zU7Q2a4C9XPzLllRub3ukmsQZoDPEvNQfhU_U8-8ZEaXCtYk_pwcX3FfpHehw8sZT8HdZOziFycsQIUlQ6ozFfuaLXRLn1S3ax7vSueNnErcx7sJhn-yO14Sb8rbO2HkXOY9Af_NTrBZiHpQveEHfTAFHBjh8NxOXucHBTA"
        },
        {
            title: "Why the Mayo’s Double Pole Trolley SS Is a Must-Have for Every Hospital...",
            excerpt: "The Mayo’s Double Pole Trolley SS combines durability, mobility, and hygiene — a reliable stainless ste...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzRBk4jYcJEAG6iH22jWGZc-bDQCTtA1-Io8mrpvu0Wd33iyvipiGlqfNf0yBd-khDwf1CE_4BwjFhgWWiVjFHCKWW_qUzJeeT_mRaz16ft-65KvCDquMeUfubfU4Fbun_3FBHsFSbJn0ZekuS8HPqkZyyNmD2riW1uhBAi3cR0o9pzlZSA9KMER_YH3faaPCHq-gte4pRylz5pSLHR2Sfixt2_7Vd8dQ3KEWqaICtk71enLQyt_4CbWyyTxqVQjvQ0xQGestbbw"
        },
        {
            title: "Why the SS Double Basin Wash Trolley Is Essential for Maintaining Hygiene...",
            excerpt: "The SS Double Basin Wash Trolley ensures superior hygiene and easy mobility with its dual detachable...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOR3r0gw00bNYmZu07i_2BGtcngSKbXyzvIzlnaQdhWQQNSd764Mu8yroM7Vi19b39aE2w6o8opPD-kKvXtIkbKm64XNDTXmRtvVLBGvI6-Mzw-UjoyCmlo8sVC3EjBgwrrGXxsM9w0ysNERg1LzFdhVq1eNjFIk9Mg151shXH9RY9yBfC3mAMMnW7Qllh1EU-75ZutkVJiAWYfR70QjGmovA4vdgDGbfBn1HozZwOSk_gJBtajhdfIVibuERdDuM8IK3ZIBq4bQ"
        },
        {
            title: "Why the Medication Cart SS Is Essential for Efficient and Safe...",
            excerpt: "Discover the Medication Cart SS — a durable, stainless steel hospital cart with multiple drawers, secure...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL2K9EVh-axR8YEtMDNvXAHXEeDjIhQfSXXoWf8-iwPTOXi3J8lidiKYqTKHUsUXid3PSsBjAkX5AxdMnxkp-7EDAGhLbhWKg36n3DxBHPjv0RKkXA8Gwk8aLbP_u44mc7d8xcpPk0d8esYtSQ9laJQLIRipd5pikaTPcNdHYeATwuLlDQ4fgc0PZJQ-yFo1OLMiHQFSkqNbj9zU-BZsktz6qGuuHpDGdePdwQy-r1gH_3BTE6XbX-fr-sWteN_Jr26qNMAlc5aQ"
        },
        {
            title: "Suite Bedside Locker Dlx P/C – A Perfect Blend of Elegance and...",
            excerpt: "The Suite Bedside Locker Dlx P/C by Standard Surgical Company combines elegant design and hospital-grad...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYls2dtrUAZ_TaJxN84SVbTHCOTYpY8ey54fs1o_IyJbPEmcEu0LYxXC6wTyHkP3tqPBdi2Mcs4hGAlXJg7bhvkNBCMtY1qyVKH-KLVuArRc91mUenS8S5o4lB13e7kRsasUYOxCLXr49VYBfCs2tjYObQmhl3jeUqqBeds4pGkJ-yojD3Mo_-oaBht6OIFpe4onvDD5UEAcMafMTnTy4Vv8ErfRcfBvM7Si_s6Cd7eKy4zB2B1sCkhl8yqTO3KMm7xmB-o1k54g"
        },
        {
            title: "Why a Surgeon’s Revolving Chair Is Essential for Precision a...",
            excerpt: "The Surgeon’s Revolving Chair is engineered for comfort, precision, and endurance in operation...",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwIem_U190TsDLGK9h3U63vtO9uUF9CivSug3tjX-CgW4FgbHtA1g5j80JeGUqhLn7KJtxDwhxyB_1_8Eqj1-Coq__xEBkYDeKckvzbHBD_E7LJk-r_ENyQm73ILC3Ntr1eW3WkwTGiYI5dMm3_FwmEYxwHIQTdWXHoXPu7NlEjYvO1RjtUqiyAJlfIxMZjZIAnhvBVOn7gb6EXOjlqahi6zfrAolwgufxAUxFvdFKivJ55PYRr9zai1JPdnywxCo8M3zn5GZzQg"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow bg-white dark:bg-background-dark">
                <div className="container mx-auto px-4 pt-12 pb-8 lg:pt-16 lg:pb-10">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Knowledge</span>
                    <h1 className="font-display text-4xl lg:text-6xl text-secondary dark:text-white font-medium mb-4 leading-tight">
                        Decades <span className="text-gray-400 font-light mx-2">of</span> <span className="font-bold text-secondary dark:text-blue-400">Knowledge & Experience</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 text-base lg:text-lg">
                        Get to know everything about <span className="text-primary font-medium">Hospital Medical Furniture</span> from our Experts
                    </p>
                </div>

                <div className="border-t border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-surface-dark sticky top-[80px] lg:top-[88px] z-40 shadow-sm">
                    <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-8 text-sm font-medium whitespace-nowrap py-4">
                            {categories.map((category, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`transition-colors ${index === 0 ? 'text-primary border-b-2 border-primary pb-0.5' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'}`}
                                >
                                    {category}
                                </a>
                            ))}
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1">
                                More <ChevronDown size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {articles.map((article, index) => (
                            <ArticleCard key={index} article={article} index={index} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Knowledge;
