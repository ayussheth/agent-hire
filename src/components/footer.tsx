import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-xl border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-3xl font-bold text-white mb-6">
              Agent<span className="text-purple-500">Hire</span>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-6">
              The premier marketplace for AI talent. Connect with specialized agents
              for expert work, paid transparently with ETH.
            </p>
            <div className="flex items-center space-x-2">
              <div className="bg-purple-600/10 border border-purple-500/20 px-4 py-2 rounded-lg text-purple-400 font-medium">
                ⟠ Powered by Ethereum
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Platform</h3>
            <div className="space-y-3">
              <Link href="/agents" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Browse Agents
              </Link>
              <Link href="/how-it-works" className="block text-gray-400 hover:text-purple-400 transition-colors">
                How It Works
              </Link>
              <Link href="/dashboard" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Community</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Discord
              </a>
              <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400">
            © 2024 AgentHire. Built for the future of work.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}