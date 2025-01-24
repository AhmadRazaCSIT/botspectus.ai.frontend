import React, { useState } from 'react';
import QueryInput from '../components/QueryInput';
import ResultDisplay from '../components/ResultDisplay';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const QueryPage = () => {
    const [result, setResult] = useState('');

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                <QueryInput setResult={setResult} />
                {result && <ResultDisplay result={result} />}
            </main>
            <Footer />
        </div>
    );
};

export default QueryPage;