import React, { useState, useRef } from "react";
import { FaPlus, FaMicrophone, FaCopy } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

export default function Pages() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState("English");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  // File selection handle karne ke liye (Sirf UI side)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setInput(selectedFile.name);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  // Copy function logic
  const copyText = () => {
    if (!summary) return;
    navigator.clipboard.writeText(summary);
    alert("Summary copied to clipboard! ✅");
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white flex flex-col items-center pt-32 px-6">
      {/* Background Animated Glows */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full -z-10"></div>

      {/* Hero Section */}
      <div className="w-full max-w-3xl flex flex-col items-center gap-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            StudyGenie AI
          </h1>

          {/* Language Selector Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            {["English", "Hindi"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-1 rounded-full text-xs font-semibold transition ${
                  lang === l
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-gray-400 border border-white/10"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* The Search/Input Container */}
        <div className="w-full relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition"></div>

          <div className="relative flex items-center bg-[#161b26] border border-white/10 rounded-2xl p-2.5 shadow-2xl">
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf"
              className="hidden"
            />

            {/* Plus Button triggers file selection */}
            <button
              onClick={() => fileInputRef.current.click()}
              className={`p-3.5 hover:bg-white/5 rounded-xl transition ${file ? "text-blue-500" : "text-gray-400"}`}
              title="Upload PDF"
            >
              <FaPlus size={18} />
            </button>

            <input
              type="text"
              placeholder={
                file
                  ? "PDF Selected: " + file.name
                  : "Paste URL or ask a question..."
              }
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (file) setFile(null);
              }}
              className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-lg placeholder:text-gray-600"
            />

            <div className="flex items-center gap-3 pr-2">
              <button className="hidden sm:block p-3 hover:bg-white/5 rounded-xl transition text-gray-400">
                <FaMicrophone size={18} />
              </button>

              {/* Action Button (Logic removed) */}
              <button
                className={`bg-blue-600 hover:bg-blue-500 text-white p-3.5 rounded-xl transition shadow-[0_0_20px_rgba(37,99,235,0.3)] ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <HiOutlineSparkles size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Summary Area (Example static display) */}
        {summary && (
          <div className="w-full mt-6 p-6 bg-[#161b26] border border-white/10 rounded-2xl relative animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button
              onClick={copyText}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              title="Copy Summary"
            >
              <FaCopy size={18} />
            </button>

            <h2 className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <HiOutlineSparkles /> AI Summary ({lang})
            </h2>
            <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
              {summary}
            </div>
          </div>
        )}

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {["Summarize PDF", "YouTube TL;DR", "Study Notes"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-400 cursor-pointer hover:bg-white/10 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
