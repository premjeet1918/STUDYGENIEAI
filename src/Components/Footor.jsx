import { Link } from "react-router-dom";
import { FaYoutube, FaFilePdf, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    /* Background hamesha full width rahega */
    <footer className="w-full bg-[#0f172a] text-gray-300 border-t border-gray-800">
      {/* Yahan 'max-w-none' ya 'w-full' use karein taaki content bikhre nahi 
          lekin poori jagah cover kare. 
      */}
      <div className=" px-5 py-7">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-extrabold text-white tracking-tight italic">
              Study<span className="text-blue-500">Genuin AI</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Transforming the way you learn. Summarize long YouTube videos and
              complex PDFs in seconds with our advanced AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase text-xs tracking-widest">
              Platform
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tool" className="hover:text-blue-400 transition">
                  AI Summarizer
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-blue-400 transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase text-xs tracking-widest">
              Features
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaYoutube className="text-red-500 text-lg" /> YouTube Summary
              </li>
              <li className="flex items-center gap-2">
                <FaFilePdf className="text-blue-500 text-lg" /> PDF Insights
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase text-xs tracking-widest">
              Stay Connected
            </h3>
            <div className="flex gap-5 text-2xl">
              <a
                href="#"
                className="hover:text-blue-400 transition hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-white transition hover:scale-110"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-800/50 w-full px-10 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] opacity-60">
          <p>
            © {new Date().getFullYear()} StudyGenuin AI. Built for Smart
            Learners.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
