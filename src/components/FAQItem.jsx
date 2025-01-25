import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: "How do I ask questions to AI about my PDF file?",
        answer: "Simply upload your PDF file and type your question in the chat interface. Our AI will analyze the document and provide relevant answers based on the content."
    },
    {
        question: "Are my uploaded documents safe?",
        answer: "Yes, your documents are completely safe. We use enterprise-grade encryption and secure storage. Your files are only used for processing and are automatically deleted after your session."
    },
    {
        question: "How many questions can I ask AI about my document?",
        answer: "There is no limit to the number of questions you can ask. You can continue asking questions as long as you need to fully understand your document."
    },
    {
        question: "How many documents can I upload?",
        answer: "You can upload multiple documents at once. Our system can handle documents up to 50MB each, and you can upload up to 10 documents per session."
    }
];

function FAQItem() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            className="min-h-screen py-20 px-8"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative'
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-purple-300/20"
                        >
                            <button
                                className="w-full text-left py-4 flex justify-between items-center hover:text-purple-300 transition-colors duration-200 text-white"
                                onClick={() => toggleQuestion(index)}
                            >
                                <span className="text-lg font-medium">{item.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6" />
                                ) : (
                                    <ChevronDown className="w-6 h-6" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                                }`}
                            >
                                <p className="text-gray-300">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQItem;