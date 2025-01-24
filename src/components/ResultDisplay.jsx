import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const ResultDisplay = ({ result }) => {
    // Function to dynamically format the result
    const formatResult = (text) => {
        // Split the text into lines
        const lines = text.split('\n').filter(line => line.trim() !== '');

        return lines.map((line, index) => {
            // Check if the line is a heading (e.g., starts with "**")
            if (line.startsWith('**') && line.endsWith('**')) {
                return <h3 key={index} className="text-lg font-semibold mb-2">{line.slice(2, -2)}</h3>;
            }
            // Check if the line is a list item (e.g., starts with "*")
            else if (line.startsWith('* ')) {
                return <li key={index} className="list-disc list-inside mb-1">{line.slice(2)}</li>;
            }
            // Otherwise, treat it as a paragraph
            else {
                return <p key={index} className="mb-4">{line}</p>;
            }
        });
    };

    return (
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="p-6 bg-white shadow-lg rounded-lg mt-6">
            <h2 className="text-xl font-bold mb-4">Query Result</h2>
            <div className="text-gray-700">
                {formatResult(result)}
            </div>
        </motion.div>
    );
};

export default ResultDisplay;