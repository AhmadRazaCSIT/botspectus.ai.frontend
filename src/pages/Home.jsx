import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import TrustedBy from "../components/TrustedBy";

const Hero = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                {/* Gradient Background */}
                <Navbar/>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-[#0F0628] to-[#0F0628]"/>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="pt-32 pb-20 md:pt-40 md:pb-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Text Content */}
                            <div className="relative z-10">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    Drag your prospectus here.
                                    <span className="block text-purple-400">Ask Pal anything</span>
                                </h1>
                                <p className="mt-6 text-lg text-gray-300 max-w-lg">
                                    You don't have time to read 50 page reports.
                                    Let AI read it for you, and answer any questions
                                    you have about it.
                                </p>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    <button
                                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center">
                                        Get Started
                                        <ArrowRight className="ml-2 h-5 w-5"/>
                                    </button>
                                    <button
                                        className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors">
                                        View more
                                    </button>
                                </div>
                            </div>

                            {/* Right Column - Illustration */}
                            <div className="relative z-10">
                                <div className="relative">
                                    {/* Purple glow effect */}
                                    <div className="absolute -inset-4 bg-purple-600/20 rounded-full blur-3xl"/>

                                    {/* Illustration */}
                                    <div className="relative transform rotate-6">
                                        <img
                                            src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800&h=600"
                                            alt="AI Analysis Illustration"
                                            className="w-full h-auto rounded-lg shadow-2xl"
                                        />

                                        {/* Floating elements */}
                                        <div
                                            className="absolute -top-6 -left-6 bg-purple-600 p-4 rounded-lg shadow-lg transform -rotate-6">
                                            <FileText className="h-6 w-6 text-white"/>
                                        </div>
                                        <div
                                            className="absolute -bottom-6 -right-6 bg-purple-400 p-4 rounded-lg shadow-lg transform -rotate-6">
                                            <FileText className="h-6 w-6 text-white"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl"/>
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-400/30 rounded-full filter blur-3xl"/>
            </div>

             <div>
                 <TrustedBy/>

             </div>
            <div>

                <HowItWorks/>
            </div>
        </>


    );
};

export default Hero;