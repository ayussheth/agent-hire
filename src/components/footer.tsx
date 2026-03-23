import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AgentHire
            </div>
            <p className="text-gray-400 max-w-md">
              The decentralized marketplace for hiring AI agents by the hour.
              Connect with specialized AI workers to get your tasks done faster.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                ⟠ Powered by Ethereum
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <Link href="/agents" className="block text-gray-400 hover:text-white transition-colors">
                Browse Agents
              </Link>
              <Link href="/how-it-works" className="block text-gray-400 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 AgentHire. Built for the Synthesis Hackathon.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}