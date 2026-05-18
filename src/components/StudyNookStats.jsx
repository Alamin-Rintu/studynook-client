"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

// 🧠 SMOOTH ACCELERATED COUNTER
const AppleStyleCounter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);

  // High stiffness + low damping creates a premium instant snapping effect
  const springValue = useSpring(motionValue, {
    damping: 24,
    stiffness: 70,
  });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest),
        );
      }
    });
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
};

// 🚀 ULTRA MODERN STATS COMPONENT
const StudyNookStats = () => {
  const data = [
    {
      id: 1,
      number: 10,
      suffix: "K+",
      label: "Bookings Completed",
      desc: "Trusted by student communities globally.",
    },
    {
      id: 2,
      number: 500,
      suffix: "+",
      label: "Smart Study Rooms",
      desc: "Soundproof pods, studios & nooks ready.",
    },
    {
      id: 3,
      number: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      desc: "Highest focus score metric in the industry.",
    },
  ];

  return (
    <section className="relative w-full bg-[#050507] text-white py-32 px-6 overflow-hidden my-16">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-violet-500/[0.04] blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10 grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        {/* LEFT SIDE: Minimal Title Block (4 Columns) */}
        <div className="lg:col-span-4 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[11px] font-medium tracking-wider uppercase text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
            Live Analytics
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-100 leading-tight">
            Designed for <br />
            <span className="font-semibold text-white">
              High-Performance
            </span>{" "}
            <br />
            Students.
          </h2>
          <p className="text-zinc-500 text-sm max-w-sm font-medium leading-relaxed">
            We track real-time utilization parameters to deliver absolute
            quietness and comfort.
          </p>
        </div>

        {/* RIGHT SIDE: Borderless Grid Columns (8 Columns) */}
        <div className="lg:col-span-8 w-full grid sm:grid-cols-3 gap-12 sm:gap-6 lg:pl-12 relative">
          {/* Vertical Separator Line for Desktop Layout only */}
          <div className="hidden sm:block absolute left-0 top-4 bottom-4 w-[1px] bg-gradient-to-b from-zinc-800/20 via-zinc-800 to-zinc-800/20" />

          {data.map((item, idx) => (
            <div key={item.id} className="space-y-4 group relative">
              {/* Top Accent Line on Hover */}
              <div className="absolute -top-4 left-0 w-0 h-[2px] bg-violet-500 transition-all duration-500 group-hover:w-12" />

              {/* Huge Clean Typography Counter */}
              <div className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-white flex items-baseline select-none">
                <AppleStyleCounter value={item.number} />
                <span className="text-zinc-600 font-light ml-0.5 group-hover:text-violet-400 transition-colors duration-500">
                  {item.suffix}
                </span>
              </div>

              {/* Info Block */}
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-zinc-200 tracking-wide">
                  {item.label}
                </h3>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyNookStats;
