import React, { useState } from 'react';
import axios from 'axios';
import { Languages, ArrowRight, Loader2, Copy, Check } from 'lucide-react';

function App() {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to translate');
      return;
    }

    setIsLoading(true);
    setError('');
    setTranslation('');

    try {
      const response = await axios.post('/translate', {
        text: inputText
      });
      setTranslation(response.data.translation);
    } catch (err) {
      setError('Translation failed. Please try again.');
      console.error('Translation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (translation) {
      try {
        await navigator.clipboard.writeText(translation);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text:', err);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleTranslate();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Languages className="w-8 h-8 text-white mr-3" />
            <h1 className="text-4xl font-bold text-white">Translation Machine</h1>
          </div>
          <p className="text-white/80 text-lg">AI-powered English to Vietnamese translation</p>
        </div>

        {/* Main Translation Interface */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-white font-medium">English</span>
              </div>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter English text to translate..."
                className="w-full h-48 p-4 bg-white/90 rounded-xl border-2 border-white/20 focus:border-blue-400 focus:outline-none resize-none text-gray-800 placeholder-gray-500"
                disabled={isLoading}
              />
              <button
                onClick={handleTranslate}
                disabled={isLoading || !inputText.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Translating...</span>
                  </>
                ) : (
                  <>
                    <span>Translate</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Output Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white font-medium">Vietnamese</span>
                </div>
                {translation && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="text-sm">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-sm">Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
              <div className="w-full h-48 p-4 bg-white/90 rounded-xl border-2 border-white/20 text-gray-800 overflow-y-auto">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
                  </div>
                ) : translation ? (
                  <p className="whitespace-pre-wrap">{translation}</p>
                ) : (
                  <p className="text-gray-500">Translation will appear here...</p>
                )}
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              💡 Press Ctrl+Enter (or Cmd+Enter on Mac) to translate quickly
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Powered by T5 Transformer Model
          </p>
        </div>
      </div>
    </div>
  );
}

export default App; 