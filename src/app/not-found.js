"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f8ff] flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-violet-300/30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-300/30 blur-3xl rounded-full" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb25_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb25_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg px-5 py-2 rounded-full">
            <Sparkles className="text-violet-600" size={18} />
            <span className="text-sm font-semibold text-gray-700">
              Oops! This page wandered off.
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight text-[#140b45]">
              404 <br />
              <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Not Found
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-gray-500">
              The page you’re trying to reach may have been removed, renamed,
              or is temporarily unavailable. Don’t worry — we’ll guide you back.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-2">
            <Link href="/">
              <button className="group relative overflow-hidden bg-[#140b45] hover:bg-[#24136e] transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-2xl shadow-violet-300">
                <Home size={18} />
                Back Home

                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>

            <Link href="/rooms">
              <button className="group bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-violet-300 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-gray-700 flex items-center gap-3 shadow-lg">
                View Rooms
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex items-center justify-center"
        >
          {/* Floating Blur Shapes */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute top-10 left-10 w-24 h-24 rounded-full bg-yellow-300 blur-md opacity-70"
          />

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute bottom-10 right-12 w-28 h-28 rounded-full bg-pink-300 blur-md opacity-70"
          />

          <motion.div
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ repeat: Infinity, duration: 9 }}
            className="absolute top-24 right-24 w-20 h-20 rounded-3xl bg-blue-400 opacity-70"
          />

          {/* Glass Card */}
          <div className="relative w-[420px] h-[500px] rounded-[40px] border border-white/30 bg-white/40 backdrop-blur-2xl shadow-[0_20px_80px_rgba(91,33,182,0.15)] overflow-hidden">
            
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-violet-200/50 to-transparent" />

            {/* Floating 404 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <motion.h1
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="text-[130px] font-black leading-none bg-gradient-to-r from-violet-700 to-blue-500 bg-clip-text text-transparent drop-shadow-xl"
              >
                404
              </motion.h1>

              <h2 className="text-3xl font-bold text-[#140b45] mt-4">
                Page Missing
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed max-w-sm">
                Looks like this page drifted away into the digital universe.
              </p>

              {/* Decorative */}
              <div className="flex gap-4 mt-10">
                <div className="w-4 h-4 rounded-full bg-violet-500" />
                <div className="w-4 h-4 rounded-full bg-pink-400" />
                <div className="w-4 h-4 rounded-full bg-blue-400" />
              </div>
            </div>

            {/* Bottom Light */}
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}