import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const products = [
        {
            title: "Electric ICU Bed",
            sku: "SS-ICU-1001",
            description: "Premium 5-function electric bed with remote control, CPR release, and battery backup. Designed for critical care.",
            category: "Hospital Beds",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH7KKLFwYpDJAQyjINX7DFFnv0ohFtUTv9ff_Dq5BtEsRq2fUGs6c43tmoxR3b_DtU4OVwcvdtTC5v57A1WO0hNkybyobFgDFaqfdewAMegUyoSdqpMhp5VxvYa4b4oy9nwf-gg3dFfTluqGpkLJN5or55anPz6YNd9zqUwDoGqro5SUMjZKYv24Q9aPmOsEQ68TTMKtrjdCmDSbynF4DOz2vbgdgPFgTK2I7TxXbsF5rXy6dHpnvJ86jsEEhx0LdgDrLCsZpubw",
            new: true
        },
        {
            title: "Advanced Care Bed",
            sku: "SS-AC-2040",
            description: "Fully adjustable with CPR release and battery backup. Ideal for high dependency units.",
            category: "Hospital Beds",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkRKzvGTcy-iRWaLBHKR2k7X2yUJzRrFdUVR014LikUtstbpyfGjn2prlrhoAOlc1AwqQponKLF1f8ao5clM6L3XafLPOA0YFjjSckjkjyqYkfgazCn_s_7hcd7mQ__PcmX4FIIAsxXMhy1t-3CEuX4h482s8rzK4Awin3H0cFls0SvnKi-UVcVn-BBZvhncBX_pEdpPiCFll1gMoKW9JmNrrKkpbsursAYY1Kpqo0zAHK35SL9tFkuMlYOp5RwnvX5csQjus7mQ"
        },
        {
            title: "Semi-Fowler Bed",
            sku: "SS-SF-305",
            description: "Manual crank operated bed with ABS panels. Robust construction for general wards.",
            category: "Hospital Beds",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBibJIj8wS-fxUssZVHydhDdW5quPY6o0i4ZgSmLmKxI0dTTb6WXguOY_lxX50HuO5WbHd4EIvW9ISkHdIJIToen7Vvm_LkpS9ypbi18bUManNr0YSU6oeOSXWPoeUPz-PBZwYeNRyurwpNYx3iwSW7rKx-d0PhCNPZXIhs9kPwBISLo_cWTkN9w6kYH8F2e8YPMB3q2wGU18ddTM0D-ucMGwWib_fHdcuOFfEi2wKeRdHFrR4_vOqcX_g7WzxAgBplC-GMHZdiCg"
        },
        {
            title: "5-Function Casualty Bed",
            sku: "SS-CB-120",
            description: "Electrical deluxe bed with urine bag holder, collapsible rails & IV pole. Space saving design.",
            category: "Emergency",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7a4VrOgS4o-1zXqtcNhs-pEVjgmp_G2CRYi5Kd6jQGdpazaHtkHybJ5rybdsjbOQnJdlc-vSIJxrfgZQ8ma4s10rzeCQC9Yu8nGz0PZ2ZtJ_FFBiOf67zFhJh8ojYMZYZGSirRiJG0CRDmKvTkURfDqjxsG3RRDsm4zIv5Q3ZZGyXdeTbrkwiV4q1LlRG_Ues7cRxHfrfW_TfGjOaV4lRy0mgvyjJDvgFM0fUx4-4fUtD2i98DLPLtfM5M2jKUA5dOCkj3eQ40A"
        },
        {
            title: "3-Function Deluxe Bed",
            sku: "SS-DB-330",
            description: "Manual crank system with polymer rails. Durable and easy to clean for long term use.",
            category: "Ward Care",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgaHPS4Z1eLayV3k7pWmqh-ABz9xALtXst5LugGlfQ2YOQIle0QbwxY62xZ12Cs3LEYC4i5cDs9QLb47dDYptfpicgNc_3AdbluFw11Cp6awoKV0VSKFZBRJs1KjgSuvZ8C8VwE0lYNuQbCD5cbSswvpRs4W7LnxACY622kd6aW18FAL0r1fUF7G6Xj7_kbFKRt6XJ2DhD5aMKdPd9cnu9g85g38Z-54aiVZjn1VYCF-ovMADvZ8n1dISh-RiB4uz4gRTpZQpAbg"
        },
        {
            title: "Pediatric Safety Bed",
            sku: "SS-PB-500",
            description: "Full safety rails for pediatric use. Manual classic bed with bright aesthetics.",
            category: "Pediatric",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR6Lfh81mX-21aXF6avIUTlzCAP06pT57xYLnyGlTN6we8qkSrVgQPdcMtobtrw-cyThrcGlFPd0AXnY3YqGgjfJs3nuiU4shO-BhQ5d5bSRK3q0Abu0KnzE5777YICthwNy81nNdjwZMVYQnEGPHVm5fKl3ai6Ab0d4v0O-AObnAmNi4SWdhf-88hvEJZzyCDprw27Z6QWHoCHZgb6sERa-8v3JTivJvHvjGuzPidhfvpO9Aa8bcyMG-HLzsqxkGO9jhDW-3ZCg"
        },
        {
            title: "4-Function Dialysis Bed",
            sku: "SS-DB-400",
            description: "Compact bed with urine bag holder, TV mount, and space-saving design for dialysis centers.",
            category: "Dialysis",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmsoxWHQlYpa84UFIk5dK9i19REPwcvhw9cLG_XHjhzRsBp13CnB34mvS1bpiCPfyLXzW0VWVvVDmY0UuMOqyAkaYUkRk44GOLQjtjHdG4yZyELh0eoBQnw1TOprCJDoWBtHVR6Dihf34cO8jLRUnVBbA0jD94g1Vd2Ad652v_Y18gir5Uadoesp9uVsyCFjzne5yH2imtTxzI4A7kaI_W2I4f8cyFyLOkUuPIcrzglQaDEhz7n5hVzAFgtmoosP7G_X82pIWknA"
        },
        {
            title: "5-Function Manual Modern",
            sku: "SS-MM-200",
            description: "Modern aesthetic with manual controls. Includes urine bag holder and 2pcs SS rails.",
            category: "General Ward",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYDYqn3MB_YW6qi99EmpBicJHp4wuCId1GP3zmUh4cpiJMZsMrIetA08urnoxicTsCJJgJky5-e7vmIN_Gf_WyoM520xW2_mpMdfVMzwdb0puaN4F4S1qu6k7z0JuMu3IdboF4aLzCTjIYYda1JUGQ_LYoZS_ire0t5mfNWg_w292GX9OdWRC46lGXxyJyXn3ov5u8dnIMh3IfkouSQNkx6uI_5ZL9MxvLdo_FXQi4I0HthRmrEh_eLvokKGFuo43zIQsQuqCxhw"
        },
        {
            title: "4-Function Electrical Compact",
            sku: "SS-CE-700",
            description: "Compact footprint for small rooms. Full electrical adjustment capabilities.",
            category: "Private Room",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Wqoldx5oHzZ-Mfc-JJB1br5sZlYDwIahDFoqSyPjA9NMMiydToUUWd1TOfuhFindkZvc6ZYn14J7YU3cK710L8_nzCpBdzz5QV5b_uFB5HAnBzcFoW_GbKblmfJUc2sF4arBx_l5Xo-R3rnEsjf17bF_a2ou-a8QYvZVPeu3c_T4JXZjSQ6DMiEDzqQvJiomykMO2zqYXjSFKb--pSmSn-6LjZfeNnSo2dwIN9NYyVDOebLTofZFdE-tHCY86Smh90sVsRkLVw"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-background-dark">
            <header className="relative bg-white dark:bg-surface-dark overflow-hidden shadow-sm">
                <div className="container mx-auto px-4 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Products</span>
                            <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                                Enhance Your Hospital Space with Our <span className="text-secondary dark:text-blue-400">Premium Hospital Furniture</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                                Your one-stop shop for all your hospital furniture needs in India! Our wide range of products
                                includes everything from ICU Beds and Examination Couches to Revolving Chairs and Crash Carts.
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-500 italic border-l-4 border-primary pl-4">
                                Filter and choose from specific categories to meet your requirement!
                            </p>
                        </div>
                        <div className="relative lg:h-96 w-full flex justify-center lg:justify-end">
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 shadow-inner w-full max-w-lg h-80 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-transparent dark:from-surface-dark/90 z-10"></div>
                                <img
                                    alt="Modern Hospital Building Sketch"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-overlay"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi3_F_sePYpPASIqKWYkCcS-siseWHLIVF8RO9AyFU6yaE2ePUMzrzr7q59eN6GYALv-wFq6p4wcxgVTQefdQ1xPBoN8y_yGnS8yyoNVlk9CNhw6QxXF8TmlycN8rBXodv57p7QNikwyGqJs1_1EYpKpX_BvOEQi5hoKIgE0lzMCd70vf3zppiP134XWSpsE4M63Ryi05ZtwJNyaOskvBFZxFk_WoTDpRjThXlpg1dCwKfspA4f8oIewMZcyrPOiaziaCpt8V-_g"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="w-full lg:w-1/4 space-y-8">
                        <ProductFilters />
                    </aside>
                    <section className="w-full lg:w-3/4">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                            <div className="flex items-center space-x-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                                    <ChevronLeft size={18} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-white shadow-md font-bold text-sm">1</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 font-medium text-sm transition-colors">2</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 font-medium text-sm transition-colors">3</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                            <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1-12 of 48 products</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeft size={16} />
                                </button>
                                <button aria-current="page" className="relative z-10 inline-flex items-center bg-secondary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">1</button>
                                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-200 ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:z-20 focus:outline-offset-0">2</button>
                                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-200 ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:z-20 focus:outline-offset-0">3</button>
                                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Next</span>
                                    <ChevronRight size={16} />
                                </button>
                            </nav>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Products;
