"use client";

import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { MdOutlineInsertChart, MdLock, MdFlashOn } from "react-icons/md";

import bannerImg from "../../public/assests/Banner.jpg";
import bannerImg2 from "../../public/assests/Banner2.jpg";

const Banner = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center bg-white overflow-hidden">
      {/* Background Glow Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50" />
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-violet-200/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-200/30 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center z-10">
        {/* LEFT */}
        <div className="space-y-8">
          <Chip className="bg-violet-100 text-violet-700 border border-violet-200 px-5 py-2 rounded-full text-sm font-medium shadow-sm">
            ✨ Quiet • Focus • Productivity
          </Chip>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-zinc-900">
            Find Your{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Perfect Study Room
            </span>
          </h1>

          <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
            Discover peaceful study spaces in top libraries. Book instantly,
            focus better, and boost your productivity like never before.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button 
              size="lg"
              className="rounded-2xl px-8 py-6 text-base font-semibold bg-zinc-900 text-white hover:bg-black transition hover:scale-[1.02]"
            >
              Explore Rooms
            </Button>

            <Button
              size="lg"
              className="rounded-2xl px-8 py-6 text-base font-semibold text-white shadow-lg hover:shadow-xl transition hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
              }}
            >
              List Your Room
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-violet-100 text-violet-600 shadow-sm">
                <MdFlashOn size={24} />
              </div>
              <div>
                <p className="font-semibold text-zinc-900">Instant Booking</p>
                <p className="text-sm text-zinc-500">2-click reservation</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm">
                <MdLock size={24} />
              </div>
              <div>
                <p className="font-semibold text-zinc-900">Secure Access</p>
                <p className="text-sm text-zinc-500">Verified spaces</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-amber-100 text-amber-600 shadow-sm">
                <MdOutlineInsertChart size={24} />
              </div>
              <div>
                <p className="font-semibold text-zinc-900">Earn Income</p>
                <p className="text-sm text-zinc-500">List & monetize</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[680px]">
            {/* Glow Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-300/30 to-blue-300/30 blur-3xl rounded-[3rem]" />

            {/* Main Image (INCREASED SIZE) */}
            <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl border border-white">
              <Image
                src={bannerImg}
                alt="Study Room"
                className="object-cover w-full h-[520px] lg:h-[600px]"
                priority
              />
            </div>

            {/* Floating Second Image (bigger too) */}
            <div className="absolute -bottom-12 -right-12 w-2/5 lg:w-1/2 rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-30">
              <Image
                src={bannerImg2}
                alt="Study Space"
                className="object-cover w-full h-[220px] lg:h-[260px]"
                priority
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-[-20px] left-[-10px] bg-white/90 backdrop-blur-md shadow-lg border border-gray-100 px-5 py-3 rounded-2xl text-sm font-medium z-40">
              <span className="text-emerald-500 font-bold">●</span> 248 rooms
              available now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
