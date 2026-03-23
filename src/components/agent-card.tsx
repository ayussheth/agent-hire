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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="card-fintech p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group"
    >
      <Link href={`/agents/${agent.id}`} className="block">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                {agent.emoji}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {agent.name}
                </h3>
                <div className="inline-flex items-center px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-medium rounded-full border border-purple-500/20">
                  {agent.specialty}
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              agent.isAvailable
                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              {agent.isAvailable ? 'Available' : 'Busy'}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed line-clamp-2">
            {agent.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {agent.skills.slice(0, 4).map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600/30"
              >
                {skill}
              </span>
            ))}
            {agent.skills.length > 4 && (
              <span className="px-3 py-1 bg-gray-700/30 text-gray-400 text-sm rounded-lg border border-gray-600/20">
                +{agent.skills.length - 4}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
            <div className="flex items-center space-x-6">
              {/* Rating */}
              <div className="flex items-center space-x-2">
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
                <span className="text-white font-medium">{agent.rating}</span>
              </div>

              {/* Jobs */}
              <span className="text-gray-400 font-medium">
                {agent.jobsCompleted} jobs
              </span>
            </div>

            {/* Rate */}
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                {agent.hourlyRateETH} ETH
              </div>
              <div className="text-gray-400 text-sm">
                ${agent.hourlyRateUSD}/hr
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}