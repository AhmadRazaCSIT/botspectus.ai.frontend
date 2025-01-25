import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <footer className="relative text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 px-8 pt-20 pb-8">
                <div className="max-w-6xl mx-auto">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="text-5xl font-bold mb-6">
                                Ready to use your new{' '}
                                <span className="text-[#B784C1]">AI document reader</span>?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Generate content, summarize documents and ask any question with the world's leading content artificial intelligence system.
                            </p>
                            <div className="flex gap-6">
                                <a href="#demo" className="flex items-center gap-2 bg-[#B784C1] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#9A6BA4] transition-colors duration-300">
                                    Request A Demo
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a href="#features" className="flex items-center gap-2 border border-[#B784C1] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#B784C1]/10 transition-colors duration-300">
                                    Explore Features
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="mb-12">
                                <p className="text-lg mb-4">
                                    HypoDoc gives documents a voice. Ask questions, get summaries, discuss ideas - your documents have never been more useful.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4">Join our newsletter</h3>
                                <form onSubmit={handleSubmit} className="flex gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Your Email Address"
                                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#B784C1]"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#B784C1] hover:text-white transition-colors duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        How It Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#docs" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Docs
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#resources" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Resources
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center border-t border-white/10 pt-8">
                        <p className="text-gray-400">
                            Copyright © {new Date().getFullYear()} HypoDoc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export  default  Footer