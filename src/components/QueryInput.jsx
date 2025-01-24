import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, scaleUp } from '../animations';

const QueryInput = ({ setResult }) => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleQuery = async () => {
        if (!query) {
            setError('Please enter a query.');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/api/document/query', { query });
            setResult(response.data.RefineQuery);
        } catch (error) {
            console.error('Error querying:', error);
            setError('An error occurred while processing your query. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-8 bg-gradient-to-r from-indigo-800 to-maroon rounded-2xl shadow-2xl"
        >
            <motion.div
                variants={slideIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-bold text-white text-center">
                    Ask Your Question
                </h2>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setError(null); // Clear error on input change
                    }}
                    placeholder="Enter your query..."
                    className="w-full p-4 rounded-lg bg-white bg-opacity-20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {error && (
                    <motion.p
                        variants={scaleUp}
                        initial="hidden"
                        animate="visible"
                        className="text-red-400 text-sm text-center"
                    >
                        {error}
                    </motion.p>
                )}
                <motion.button
                    variants={scaleUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                    onClick={handleQuery}
                    disabled={isLoading}
                    className="w-full bg-yellow-400 text-indigo-800 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center"
                >
                    {isLoading ? (
                        <svg
                            className="animate-spin h-5 w-5 mr-3 text-indigo-800"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    ) : (
                        'Submit Query'
                    )}
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default QueryInput;