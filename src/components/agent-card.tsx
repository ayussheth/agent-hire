"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Agent } from "@/data/agents";

interface AgentCardProps {
  agent: Agent;
  index?: number;
}

export default function AgentCard({ agent, index = 0 }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <Link href={`/agents/${agent.id}`}>
        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <div className="text-4xl">{agent.emoji}</div>

          <div className="flex-1">
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {agent.name}
                </h3>
                <p className="text-blue-400 text-sm">{agent.specialty}</p>
              </div>

              {/* Availability Badge */}
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                agent.isAvailable
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {agent.isAvailable ? 'Available' : 'Busy'}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {agent.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1 mb-4">
              {agent.skills.slice(0, 3).map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
              {agent.skills.length > 3 && (
                <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md">
                  +{agent.skills.length - 3} more
                </span>
              )}
            </div>

            {/* Stats Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(agent.rating) ? 'text-yellow-400' : 'text-gray-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">{agent.rating}</span>
                </div>

                {/* Jobs Completed */}
                <span className="text-gray-400 text-sm">
                  {agent.jobsCompleted} jobs
                </span>
              </div>

              {/* Rate */}
              <div className="text-right">
                <div className="text-white font-semibold">
                  {agent.hourlyRateETH} ETH
                </div>
                <div className="text-gray-400 text-sm">
                  ${agent.hourlyRateUSD}/hour
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}