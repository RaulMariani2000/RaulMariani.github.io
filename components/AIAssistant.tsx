
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, RefreshCcw } from 'lucide-react';
import { Message } from '../types';
import { askAssistant } from '../services/geminiService';
import { USER_INFO } from '../constants';

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hi! I'm the Mariani Intelligence core. You can ask me anything about Raúl's experience, skills, or projects. How can I assist you today?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await askAssistant(input);
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Oops, something went wrong with my neural circuits. Please try again.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Portfolio Intelligence</h2>
          <p className="text-slate-400">Interact with my AI assistant to learn more about my work and vision.</p>
        </div>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Header */}
          <div className="px-6 py-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Mariani Core</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Active</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setMessages([messages[0]])}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <RefreshCcw size={18} />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                  msg.role === 'assistant' ? 'bg-indigo-600/20 text-indigo-400' : 'bg-slate-700 text-slate-300'
                }`}>
                  {msg.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === 'assistant' 
                    ? 'bg-slate-800 text-slate-200' 
                    : 'bg-indigo-600 text-white'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="bg-slate-800 rounded-2xl p-4 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                  <span className="text-xs text-slate-400 italic">Core is processing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-slate-900/50 border-t border-slate-800">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={`Ask about ${USER_INFO.name.split(' ')[0]}'s projects or skills...`}
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl py-4 pl-6 pr-14 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-3 w-10 h-10 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white rounded-xl flex items-center justify-center transition-all shadow-lg shadow-indigo-600/20"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
