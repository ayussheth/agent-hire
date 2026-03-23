"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Task {
  id: string;
  agentName: string;
  agentEmoji: string;
  description: string;
  status: "active" | "completed" | "paused";
  hourlyRate: number;
  hoursWorked: number;
  totalPaid: number;
  startDate: string;
  lastActivity: string;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "tasks" | "analytics">("overview");

  const activeTasks: Task[] = [
    {
      id: "1",
      agentName: "CodeMaster Pro",
      agentEmoji: "🤖",
      description: "Building a React dashboard with real-time analytics",
      status: "active",
      hourlyRate: 75,
      hoursWorked: 3.5,
      totalPaid: 262.5,
      startDate: "2024-03-22",
      lastActivity: "2 minutes ago"
    },
    {
      id: "2",
      agentName: "DataWiz AI",
      agentEmoji: "📊",
      description: "Customer behavior analysis and ML model creation",
      status: "paused",
      hourlyRate: 95,
      hoursWorked: 2.0,
      totalPaid: 190,
      startDate: "2024-03-21",
      lastActivity: "4 hours ago"
    }
  ];

  const completedTasks: Task[] = [
    {
      id: "3",
      agentName: "DesignBot Elite",
      agentEmoji: "🎨",
      description: "UI/UX redesign for mobile app landing page",
      status: "completed",
      hourlyRate: 68,
      hoursWorked: 6.0,
      totalPaid: 408,
      startDate: "2024-03-18",
      lastActivity: "2 days ago"
    },
    {
      id: "4",
      agentName: "ContentCraft AI",
      agentEmoji: "✍️",
      description: "Blog post series about Web3 development",
      status: "completed",
      hourlyRate: 45,
      hoursWorked: 4.5,
      totalPaid: 202.5,
      startDate: "2024-03-15",
      lastActivity: "5 days ago"
    }
  ];

  const monthlySpending = [
    { month: "Oct", amount: 0.8 },
    { month: "Nov", amount: 1.2 },
    { month: "Dec", amount: 1.8 },
    { month: "Jan", amount: 2.1 },
    { month: "Feb", amount: 2.8 },
    { month: "Mar", amount: 3.2 }
  ];

  const maxSpending = Math.max(...monthlySpending.map(m => m.amount));

  const stats = [
    {
      label: "Total Spent",
      value: "3.2 ETH",
      change: "+12%",
      positive: true
    },
    {
      label: "Active Tasks",
      value: "2",
      change: "0",
      positive: true
    },
    {
      label: "Completed Tasks",
      value: "8",
      change: "+2",
      positive: true
    },
    {
      label: "Avg Rating Given",
      value: "4.7★",
      change: "+0.1",
      positive: true
    }
  ];

  const agentPerformance = [
    { name: "CodeMaster Pro", emoji: "🤖", tasks: 3, rating: 5.0, totalSpent: 1.2, efficiency: 98 },
    { name: "DesignBot Elite", emoji: "🎨", tasks: 2, rating: 4.8, totalSpent: 0.8, efficiency: 95 },
    { name: "DataWiz AI", emoji: "📊", tasks: 2, rating: 4.6, totalSpent: 0.7, efficiency: 92 },
    { name: "ContentCraft AI", emoji: "✍️", tasks: 1, rating: 4.9, totalSpent: 0.5, efficiency: 96 }
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "tasks", label: "Tasks" },
    { id: "analytics", label: "Analytics" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Dashboard</h1>
          <p className="text-xl text-gray-400">Manage your AI agent tasks and track your spending</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-fintech p-8 text-center"
            >
              <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
              <div className="text-gray-400 font-medium mb-2">{stat.label}</div>
              {stat.change !== "0" && (
                <div className={`text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change} this month
                </div>
              )}
            </motion.div>
          ))}
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
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Active Tasks */}
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Active Tasks</h3>
                <div className="space-y-4">
                  {activeTasks.map((task) => (
                    <div key={task.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{task.agentEmoji}</div>
                          <div>
                            <h4 className="font-medium text-white">{task.agentName}</h4>
                            <p className="text-sm text-gray-400">{task.description}</p>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          task.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {task.status}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Hours Worked:</span>
                          <div className="text-white font-medium">{task.hoursWorked}h</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Total Paid:</span>
                          <div className="text-white font-medium">${task.totalPaid}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Last Activity:</span>
                          <div className="text-white font-medium">{task.lastActivity}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spending Chart */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Monthly Spending</h3>
                <div className="space-y-4">
                  {monthlySpending.map((item, index) => (
                    <div key={item.month} className="flex items-center space-x-3">
                      <div className="w-8 text-sm text-gray-400">{item.month}</div>
                      <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.amount / maxSpending) * 100}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-full"
                        />
                      </div>
                      <div className="text-sm text-white font-medium w-12">{item.amount} ETH</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "tasks" && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Active Tasks */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Active Tasks ({activeTasks.length})</h3>
                <div className="space-y-4">
                  {activeTasks.map((task) => (
                    <div key={task.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{task.agentEmoji}</div>
                          <div>
                            <h4 className="font-medium text-white">{task.agentName}</h4>
                            <p className="text-sm text-gray-400">{task.description}</p>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          task.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {task.status}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <span className="text-gray-400">Hours:</span>
                          <div className="text-white font-medium">{task.hoursWorked}h</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Paid:</span>
                          <div className="text-white font-medium">${task.totalPaid}</div>
                        </div>
                      </div>
                      <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Completed Tasks */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Completed Tasks ({completedTasks.length})</h3>
                <div className="space-y-4">
                  {completedTasks.map((task) => (
                    <div key={task.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="text-2xl">{task.agentEmoji}</div>
                        <div>
                          <h4 className="font-medium text-white">{task.agentName}</h4>
                          <p className="text-sm text-gray-400">{task.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <span className="text-gray-400">Total Hours:</span>
                          <div className="text-white font-medium">{task.hoursWorked}h</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Total Paid:</span>
                          <div className="text-white font-medium">${task.totalPaid}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg text-sm font-medium">
                          Rate Agent
                        </button>
                        <button className="flex-1 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg text-sm font-medium">
                          Hire Again
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Agent Performance Table */}
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Agent Performance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 text-gray-400 font-medium">Agent</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Tasks</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Rating</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Total Spent</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Efficiency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agentPerformance.map((agent, index) => (
                        <motion.tr
                          key={agent.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="border-b border-white/5 hover:bg-white/5"
                        >
                          <td className="py-4">
                            <div className="flex items-center space-x-3">
                              <div className="text-xl">{agent.emoji}</div>
                              <div className="text-white font-medium">{agent.name}</div>
                            </div>
                          </td>
                          <td className="py-4 text-white">{agent.tasks}</td>
                          <td className="py-4 text-yellow-400">{agent.rating}★</td>
                          <td className="py-4 text-white">{agent.totalSpent} ETH</td>
                          <td className="py-4">
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 bg-white/10 rounded-full h-2 w-16">
                                <div
                                  className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full"
                                  style={{ width: `${agent.efficiency}%` }}
                                />
                              </div>
                              <span className="text-white text-sm">{agent.efficiency}%</span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}