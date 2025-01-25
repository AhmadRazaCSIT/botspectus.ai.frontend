import React from 'react';

function Action() {
    return (
        <div className="bg-black py-10 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl font-bold mb-4 text-[#B784C1]">
                            Ready to use your{' '}
                            <span className="text-[#B784C1]">new AI document reader</span>
                            <span className="text-[#B784C1]">?</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Generate content, summarize documents and ask any question with the world's leading content artificial intelligence system.
                        </p>
                        <button className="bg-[#B784C1] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#9A6BA4] transition-colors duration-300">
                            Try it free
                        </button>
                    </div>
                    <div className="relative">
                        <div className="w-full aspect-square relative">
                            <div className="absolute inset-0">
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    <path
                                        fill="#B784C1"
                                        d="M100,0 L200,100 L100,200 L0,100 Z"
                                        opacity="0.2"
                                    />
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="50"
                                        fill="#B784C1"
                                        opacity="0.3"
                                    />
                                    <path
                                        fill="#B784C1"
                                        d="M150,50 A50,50 0 0,1 150,150"
                                        opacity="0.4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export  default  Action;