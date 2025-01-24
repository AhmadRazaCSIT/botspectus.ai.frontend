import React from 'react';
import { Upload, MessageSquare, Zap } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-[#0F0628] to-purple-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        How chat with PDF works
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Simply upload a document, and ask questions about it. AI will read
                        your entire file for you, and use that information to answer your
                        questions.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Step 1 */}
                    <div className="relative">
                        <div className="bg-[#1A1033] rounded-2xl p-6 h-full">
                            <div className="absolute -top-4 left-6 bg-purple-600 rounded-full p-3">
                                <Upload className="h-6 w-6 text-white" />
                            </div>
                            <div className="pt-8">
                                <span className="text-purple-400 font-medium">Step 1</span>
                                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                                    Upload your PDF
                                </h3>
                                <p className="text-gray-300">
                                    Drag and drop any PDF into the chat. Reports? Requirement
                                    documents? Contracts? Whatever you upload, our AI will read the
                                    entire file for you.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                        <div className="bg-[#1A1033] rounded-2xl p-6 h-full">
                            <div className="absolute -top-4 left-6 bg-purple-600 rounded-full p-3">
                                <MessageSquare className="h-6 w-6 text-white" />
                            </div>
                            <div className="pt-8">
                                <span className="text-purple-400 font-medium">Step 2</span>
                                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                                    Ask anything
                                </h3>
                                <p className="text-gray-300">
                                    Treat Hypo like your personal assistant. Ask it anything—from writing a
                                    LinkedIn post about that document, to highlighting the key ways that it
                                    would affect your company—it'll get it done in a jiffy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                        <div className="bg-[#1A1033] rounded-2xl p-6 h-full">
                            <div className="absolute -top-4 left-6 bg-purple-600 rounded-full p-3">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <div className="pt-8">
                                <span className="text-purple-400 font-medium">Step 3</span>
                                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                                    AI answers you instantly
                                </h3>
                                <p className="text-gray-300">
                                    Our artificial intelligence synthesizes insights from your document with
                                    factual info from the web to answer your questions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Demo Illustrations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                    {/* Left Demo */}
                    <div className="bg-[#1A1033]/80 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="space-y-4">
                            <button className="bg-[#2A2444] text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-[#2A2444]/80 transition-colors">
                                Summarise this report in 500 words
                            </button>
                            <button className="bg-[#2A2444] text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-[#2A2444]/80 transition-colors">
                                What are the key project requirements stated in this brief?
                            </button>
                            <button className="bg-[#2A2444] text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-[#2A2444]/80 transition-colors">
                                Write a LinkedIn post from this document
                            </button>
                            <button className="bg-[#2A2444] text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-[#2A2444]/80 transition-colors">
                                Tell me the key details in this contract
                            </button>
                        </div>
                    </div>

                    {/* Right Demo */}
                    <div className="bg-[#1A1033]/80 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-gray-200 rounded-lg p-3">
                                <Upload className="h-6 w-6 text-gray-600" />
                            </div>
                            <div className="flex-1">
                                <div className="bg-white rounded-lg p-4">
                                    <p className="text-gray-500 text-center">Upload a document to ask AI</p>
                                    <button className="mt-4 w-full bg-purple-100 text-purple-600 p-2 rounded-lg hover:bg-purple-200 transition-colors">
                                        + Upload document
                                    </button>
                                </div>
                                <div className="bg-[#2A2444] rounded-lg p-4 mt-4">
                                    <p className="text-gray-300">Your message here</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#2A2444] rounded-lg p-4 mt-4">
                            <p className="text-gray-300 text-sm">
                                Write a comprehensive, detailed summary about this document
                            </p>
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-300 text-sm">
                                    The document titled "Ethical Outcomes and Business Ethics:
                                    Toward Improving Business Ethics Education" explores the
                                    status of business ethics education and the importance of
                                    ethical priorities within business schools and the broader
                                    business context.
                                </p>
                                <p className="text-gray-300 text-sm">
                                    The paper highlights the prevalence of unethical conduct in
                                    business and on college campuses, the resistance to teaching
                                    business ethics in schools, and the need for a more integrated
                                    and effective approach to teaching ethical behavior. It also
                                    emphasizes the significance of various ethical outcomes, such...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;