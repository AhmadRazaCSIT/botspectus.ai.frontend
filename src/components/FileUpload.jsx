import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { fadeIn, scaleUp } from '../animations';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/api/document/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error uploading file.');
        }
    };

    return (
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="p-6 bg-white shadow-lg rounded-lg">
            <input type="file" onChange={handleFileChange} className="mb-4" />
            <button
                onClick={handleUpload}
                className="bg-maroon text-white px-4 py-2 rounded hover:bg-indigo-800 transition-colors"
            >
                Upload PDF
            </button>
            {message && <p className="mt-4 text-gray-700">{message}</p>}
        </motion.div>
    );
};

export default FileUpload;