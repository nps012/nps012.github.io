
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export default function ResumeAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim()) return;
    
    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `
            You are a professional assistant representing Narendra Pal Singh to potential recruiters.
            Context:
            - Narendra is an IIT Bombay Mechanical Engineering graduate.
            - Experience: Project Manager at RBL Bank (focused on infrastructure efficiency and customer satisfaction).
            - UPSC: 99.8 percentile, reached the final Interview stage (demonstrating resilience and analytical depth).
            - RBI: Top 200 in RBI Grade B 2024.
            - Target Roles: Sales, Generalist, or Project/Product Management.
            - Key Strengths: Demonstrated grit, structured thinking, disciplined execution, and stakeholder management.
            Maintain a balanced, professional tone. Avoid excessive hyperbole or repetitive use of the word "elite". Focus on clear evidence of impact and capability.
          `
        }
      });
      
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to AI. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 h-[500px] shadow-2xl rounded-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold flex items-center gap-2">
              <i className="fas fa-robot text-blue-400"></i> AI Portfolio Assistant
            </h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close assistant"><i className="fas fa-times"></i></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 && (
              <p className="text-slate-400 text-sm italic text-center py-10">Ask me anything about Narendra's professional journey!</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none animate-pulse text-slate-400 text-xs">
                  Typing...
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-slate-100 bg-white flex gap-2">
            <input 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 text-sm border-none focus:ring-0 outline-none"
            />
            <button onClick={handleSend} className="text-blue-600 p-2" aria-label="Send message"><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
          aria-label="Open AI assistant"
        >
          <i className="fas fa-comment-dots text-2xl"></i>
        </button>
      )}
    </div>
  );
}
