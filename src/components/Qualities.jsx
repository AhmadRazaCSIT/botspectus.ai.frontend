import React from 'react';
import { FileCheck, FileText, MessageSquareText } from 'lucide-react';

function Qualities() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 inline-block border border-blue-400 px-6 py-2">
                        Chat with Your PDFs
                    </h1>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto">
                        HypoDoc gives documents a voice. Ask questions, get summaries, discuss ideas - your documents have never been more useful.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Create Content Card */}
                    <div className="bg-[#B784C1] rounded-lg p-8 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Create accurate content</h2>
                            <p className="text-white/90">
                                HypoDocs brings the power of precision with our AI. You can generate blog articles, social media posts and more with reference to your uploaded documents.
                            </p>
                        </div>
                        <FileCheck className="w-12 h-12 text-white/50 mt-4" />
                    </div>

                    {/* Analyze Documents Card */}
                    <div className="bg-[#B784C1] rounded-lg p-8 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Analyze lengthy documents</h2>
                            <p className="text-white/90">
                                Diving into lengthy PDFs has never been easier. Ask HypoDocs detailed questions about your PDF, and it'll provide you with a comprehensive answer.
                            </p>
                        </div>
                        <FileText className="w-12 h-12 text-white/50 mt-4" />
                    </div>

                    {/* Learn from Reports Card */}
                    <div className="bg-[#B784C1] rounded-lg p-8 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Learn from reports and papers</h2>
                            <p className="text-white/90">
                                Say hello to your new learning companion. It's not just a document reader, but an intelligent system that synthesizes insights and chunks down complex topics for you.
                            </p>
                        </div>
                        <MessageSquareText className="w-12 h-12 text-white/50 mt-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qualities;