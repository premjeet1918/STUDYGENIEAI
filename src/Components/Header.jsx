import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      {/* Full Width Container */}
      <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
        {/* LEFT → Logo with AI style */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:rotate-12 transition-transform">
            <span className="text-white font-black text-xl">S</span>
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            Study<span className="text-blue-500 italic">Genuin AI</span>
          </h1>
        </Link>

        {/* RIGHT → Navigation & Action Button */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest text-gray-300">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/tool" className="hover:text-blue-400 transition-colors">
              AI Summarizer
            </Link>
          </nav>

          {/* Call to Action Button */}
          <Link
            to="/tool"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
