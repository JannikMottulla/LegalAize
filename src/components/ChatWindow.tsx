import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content:
        "Hello! I am your AI assistant. I can scan your contracts for flaws or answer any kind of question you have regarding the content!",
    },
    {
      role: "user",
      content:
        "Hey! I have a question about the termination clause in my contract. Can you help me with that?",
    },
    {
      role: "ai",
      content:
        "Sure! I can help you with that. Please upload your contract and I will analyze it for you.",
    },
    {
      role: "ai",
      content:
        ". . .processing. . . your contract has been uploaded successfully! Let me analyze it for you.",
    },
    {
      role: "ai",
      content:
        "Your contract has a high risk of ambiguous termination clauses that could lead to disputes. Would you like me to provide more details?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col flex-1 max-w-3xl h-full bg-[#1A1B26] rounded-lg overflow-hidden border border-gray-800">
      <div className="p-4 border-b border-gray-800 flex items-center text-left gap-4">
        <MessageSquare className="w-6 h-6 text-[#7C3AED]" />
        <div>
          <h2 className="text-lg font-semibold text-white">
            Live AI Chat Demo
          </h2>
          <p className="text-sm text-gray-400">
            Ask anything about your contracts
          </p>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg animate-fade-in text-start ${
                message.role === "user"
                  ? "bg-[#7C3AED] text-white"
                  : "bg-[#2A2B36] text-gray-200"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask any question about your contract..."
            className="w-full bg-[#2A2B36] text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#7C3AED] hover:text-white transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};
