import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Send, Bot, User, Loader2 } from 'lucide-react';

// Helper function to format the AI response
const formatResponse = (response) => {
    // Replace ** with <strong> for bold text
    let formattedResponse = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Replace * with <li> for list items
    formattedResponse = formattedResponse.replace(/\* (.*?)\n/g, '<li>$1</li>');

    // Replace + with nested <li> for sub-list items
    formattedResponse = formattedResponse.replace(/\+ (.*?)\n/g, '<li style="margin-left: 20px;">$1</li>');

    // Wrap lists in <ul> tags
    formattedResponse = formattedResponse.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');

    // Add line breaks for better readability
    formattedResponse = formattedResponse.replace(/\n/g, '<br />');

    return formattedResponse;
};

function App() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) {
            setError('Please enter a query.');
            return;
        }

        // Add user message
        const userMessage = {
            id: Math.random().toString(36).substr(2, 9),
            type: 'user',
            content: inputMessage,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);
        setError(null);

        try {
            // Make API call
            const response = await axios.post('http://localhost:5000/api/document/query', {
                query: inputMessage,
            });

            // Format the AI response
            const formattedResponse = formatResponse(response.data.RefineQuery);

            // Add AI response
            const aiMessage = {
                id: Math.random().toString(36).substr(2, 9),
                type: 'ai',
                content: formattedResponse,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error querying:', error);
            setError('An error occurred while processing your query. Please try again.');

            // Add error message as AI response
            const errorMessage = {
                id: Math.random().toString(36).substr(2, 9),
                type: 'ai',
                content: 'An error occurred while processing your query. Please try again.',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex">
            {/* AI Bot Profile Section */}
            <div className="w-1/3 bg-black p-8 flex flex-col items-center justify-start">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6">
                    <Bot size={64} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-4">AI Assistant</h1>
                <p className="text-gray-400 text-center">
                    I'm here to help you with any questions or tasks you might have.
                </p>
            </div>

            {/* Chat Section */}
            <div className="flex-1 flex flex-col">
                {/* Messages Container with Scrollbar */}
                <div className="flex-1 p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex items-start space-x-2 ${
                                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                                }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                        message.type === 'user' ? 'bg-purple-600' : 'bg-gray-800'
                                    }`}
                                >
                                    {message.type === 'user' ? (
                                        <User size={16} className="text-white" />
                                    ) : (
                                        <Bot size={16} className="text-white" />
                                    )}
                                </div>
                                <div
                                    className={`rounded-lg p-4 max-w-md ${
                                        message.type === 'user'
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-gray-800 text-gray-100'
                                    }`}
                                >
                                    {/* Render formatted content */}
                                    <p dangerouslySetInnerHTML={{ __html: message.content }} />
                                    <span className="text-xs opacity-50 mt-1 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex items-center space-x-2 text-gray-400">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>AI is typing...</span>
                            </div>
                        )}
                        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input Section */}
                <div className="border-t border-gray-800 p-4">
                    <div className="max-w-3xl mx-auto flex items-center space-x-4">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => {
                                setInputMessage(e.target.value);
                                setError(null); // Clear error on input change
                            }}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Ask a question about your documents..."
                            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            disabled={isTyping}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputMessage.trim() || isTyping}
                            className="bg-purple-600 text-white rounded-lg p-2 hover:bg-purple-700 transition-colors"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;