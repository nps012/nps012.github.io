import React, { useEffect, useMemo, useRef, useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"

export default function ResumeAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  // Let user store key in browser (GitHub Pages has no secure server env)
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("GEMINI_API_KEY") || "")

  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading, isOpen])

  useEffect(() => {
    localStorage.setItem("GEMINI_API_KEY", apiKey)
  }, [apiKey])

  const systemInstruction = useMemo(
    () => `
You are a professional assistant representing Narendra Pal Singh to potential recruiters.

Context:
- Narendra is an IIT Bombay Mechanical Engineering graduate.
- Experience: Project Manager at RBL Bank (focused on infrastructure efficiency and customer satisfaction).
- UPSC: 99.8 percentile, reached the final Interview stage (demonstrating resilience and analytical depth).
- RBI: Top 200 in RBI Grade B 2024.
- Target Roles: Sales, Generalist, or Project/Product Management.
- Key Strengths: Demonstrated grit, structured thinking, disciplined execution, and stakeholder management.

Style:
- Maintain a balanced, professional tone.
- Avoid excessive hyperbole or repetitive use of the word "elite".
- Prefer concrete evidence, metrics, and concise answers.
`,
    []
  )

  const handleSend = async () => {
    if (!query.trim()) return

    const userMsg = query.trim()
    setQuery("")
    setMessages((prev) => [...prev, { role: "user", text: userMsg }])
    setLoading(true)

    try {
      if (!apiKey) {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text:
              "To answer with AI, please paste your Gemini API key in the box above. (It stays only in your browser.)",
          },
        ])
        return
      }

      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction,
      })

      const result = await model.generateContent(userMsg)
      const text = result?.response?.text?.() || "Sorry — I couldn't generate a response."

      setMessages((prev) => [...prev, { role: "bot", text }])
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error connecting to AI. Please check your API key and try again." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 h-[560px] shadow-2xl rounded-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold flex items-center gap-2">
              <i className="fas fa-robot text-blue-400"></i> AI Portfolio Assistant
            </h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close assistant">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* API key area (only stored in browser) */}
          <div className="p-3 border-b border-slate-100 bg-white">
            <label className="text-xs font-semibold text-slate-600">Gemini API Key (stored in your browser)</label>
            <div className="flex gap-2 mt-2">
              <input
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Paste Gemini API key here"
                className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-blue-400"
              />
              <button
                onClick={() => setApiKey("")}
                className="text-xs px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50"
                aria-label="Clear API key"
              >
                Clear
              </button>
            </div>
            {!apiKey && (
              <p className="text-[11px] text-slate-400 mt-2">
                If you don’t want AI, you can leave this empty — the portfolio still works.
              </p>
            )}
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 && (
              <p className="text-slate-400 text-sm italic text-center py-10">
                Ask me anything about Narendra&apos;s professional journey!
              </p>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none"
                  }`}
                >
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
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-blue-400"
            />
            <button onClick={handleSend} className="text-blue-600 p-2" aria-label="Send message">
              <i className="fas fa-paper-plane"></i>
            </button>
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
  )
}
