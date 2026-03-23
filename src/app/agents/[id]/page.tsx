"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { agents, Agent } from "@/data/agents";

interface ChatMessage {
  id: string;
  role: "user" | "agent";
  content: string;
  timestamp: Date;
}

export default function AgentProfile({ params }: { params: { id: string } }) {
  const agent = agents.find(a => a.id === params.id);
  const [activeTab, setActiveTab] = useState<"overview" | "reviews" | "demo">("overview");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatMessages]);

  if (!agent) {
    notFound();
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate agent typing and response
    setTimeout(() => {
      const responses = [
        `Hi there! I'm ${agent.name}, specialized in ${agent.specialty}. How can I help you today?`,
        `I'd be happy to help with that! Based on my experience with ${agent.skills.slice(0, 2).join(" and ")}, I can definitely assist you.`,
        `That's a great project! I've completed ${agent.jobsCompleted} similar tasks with a ${agent.successRate}% success rate. When would you like to get started?`,
        `Perfect! I typically respond within ${agent.responseTime} and work at ${agent.hourlyRateETH} ETH/hour. Shall we begin?`,
        `Thanks for choosing me! I'm confident we can achieve excellent results together. My ${agent.rating}★ rating comes from delivering quality work consistently.`
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "agent",
        content: randomResponse,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "reviews", label: `Reviews (${agent.reviews.length})` },
    { id: "demo", label: "Chat Demo" }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            <div className="flex-1">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-6xl">{agent.emoji}</div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {agent.name}
                  </h1>
                  <p className="text-xl text-blue-400 mb-4">{agent.specialty}</p>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(agent.rating) ? 'text-yellow-400' : 'text-gray-600'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-white font-semibold ml-2">{agent.rating}</span>
                    </div>
                    <span className="text-gray-400">{agent.jobsCompleted} jobs completed</span>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      agent.isAvailable
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {agent.isAvailable ? 'Available Now' : 'Currently Busy'}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {agent.description}
              </p>
            </div>

            {/* Pricing Card */}
            <div className="lg:w-80 mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/20 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-1">
                    {agent.hourlyRateETH} ETH
                  </div>
                  <div className="text-gray-400">
                    ${agent.hourlyRateUSD}/hour
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-white">{agent.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Success Rate:</span>
                    <span className="text-green-400">{agent.successRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Completed Jobs:</span>
                    <span className="text-white">{agent.jobsCompleted}</span>
                  </div>
                </div>

                <button
                  disabled={!agent.isAvailable}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    agent.isAvailable
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {agent.isAvailable ? 'Hire Now' : 'Currently Unavailable'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "overview" && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Skills & Expertise</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Primary Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Performance Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Jobs Completed:</span>
                      <span className="text-white font-semibold">{agent.jobsCompleted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Success Rate:</span>
                      <span className="text-green-400 font-semibold">{agent.successRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Average Rating:</span>
                      <span className="text-yellow-400 font-semibold">{agent.rating}★</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white font-semibold">{agent.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Client Reviews</h3>
              <div className="space-y-6">
                {agent.reviews.map((review) => (
                  <div key={review.id} className="border-b border-white/10 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-white font-medium">{review.clientName}</div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-600'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">{review.date}</span>
                    </div>
                    <p className="text-gray-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "demo" && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Chat Demo</h3>
              <p className="text-gray-400 mb-6">
                Try a demo conversation with {agent.name} to see how they work.
              </p>

              <div className="bg-black/30 border border-white/10 rounded-lg h-96 flex flex-col">
                {/* Chat Messages */}
                <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.length === 0 && (
                    <div className="text-center text-gray-400 mt-8">
                      <div className="text-4xl mb-2">{agent.emoji}</div>
                      <p>Start a conversation with {agent.name}</p>
                    </div>
                  )}

                  {chatMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/10 text-gray-300'
                      }`}>
                        {message.content}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/10 text-gray-300 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isTyping}
                    />
                    <button
                      type="submit"
                      disabled={!inputMessage.trim() || isTyping}
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}