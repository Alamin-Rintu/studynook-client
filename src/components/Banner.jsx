"use client";

import { Button, Chip } from "@heroui/react";
import React from "react";
import Image from "next/image";
import { MdOutlineExplore, MdPeople, MdStar, MdVerified } from "react-icons/md";

// Images
import roomImg1 from "../../public/assests/Banner.jpg";
import roomImg2 from "../../public/assests/Banner2.jpg";
import roomImg3 from "../../public/assests/Banner.jpg";
import Link from "next/link";

const featuredRooms = [
  {
    id: 1,
    title: "Silent Study Pod A-12",
    seats: 2,
    rating: 4.9,
    price: 12,
    image: roomImg1,
    tag: "Most Popular",
  },
  {
    id: 2,
    title: "Library Focus Room",
    seats: 4,
    rating: 4.8,
    price: 18,
    image: roomImg2,
    tag: "Premium",
  },
  {
    id: 3,
    title: "Private Reading Cabin",
    seats: 1,
    rating: 5.0,
    price: 9,
    image: roomImg3,
    tag: "Top Rated",
  },
];

const RoomCard = ({ room, index }) => {
  return (
    <div
      className={`relative bg-white rounded-3xl p-4 shadow-xl border border-zinc-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group
        ${index === 1 ? "lg:translate-y-6" : ""} 
        ${index === 2 ? "lg:col-span-2 lg:-translate-y-3" : ""}
      `}
    >
      <div className="relative h-52 w-full rounded-2xl overflow-hidden mb-5">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <span className="absolute top-4 left-4 bg-white text-zinc-900 text-xs font-semibold px-4 py-2 rounded-2xl shadow flex items-center gap-1.5">
          <MdVerified className="text-emerald-500" /> {room.tag}
        </span>

        <div className="absolute bottom-4 right-4 bg-white text-zinc-900 font-bold px-4 py-2 rounded-2xl shadow">
          ${room.price}
          <span className="font-normal text-sm">/hr</span>
        </div>
      </div>

      <h3 className="font-semibold text-lg text-zinc-900 mb-4 px-1 group-hover:text-violet-700 transition-colors">
        {room.title}
      </h3>

      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-zinc-600">
          <MdPeople size={20} />
          <span className="font-medium">{room.seats} Seats</span>
        </div>
        <div className="flex items-center gap-1 text-amber-500 font-semibold">
          <MdStar size={20} /> {room.rating}
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden">
      {/* Left Side Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/60" />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 py-16">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-5 py-2 rounded-full shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-zinc-600">
              120+ Rooms Available Now
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight tracking-tighter">
            Your Space For{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Deep Focus
            </span>
          </h1>

          <p className="text-lg text-zinc-600 max-w-md mx-auto lg:mx-0">
            Premium private study rooms in libraries. Book instantly and study
            in peace.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href={"/rooms"}>
              <Button
                size="lg"
                className="rounded-2xl px-8 py-6 text-base font-semibold 
                         border-2 border-zinc-900 text-zinc-900 
                         bg-transparent hover:bg-zinc-900 hover:text-white 
                         transition-all duration-300 active:scale-[0.98]"
              >
                Explore Rooms <MdOutlineExplore />
              </Button>
            </Link>

            <Link href={"/addRoom"}>
              <Button
                size="lg"
                className="rounded-2xl px-8 py-6 text-base font-semibold text-white shadow-lg hover:shadow-xl transition hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                }}
              >
                List Your Room
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - Beautiful Background */}
        <div className="lg:col-span-7 relative">
          {/* Background Design */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-100/60 via-blue-100/40 to-white rounded-[3.5rem] -z-10" />

          <div className="absolute -inset-8 bg-gradient-to-br from-violet-300/20 to-blue-300/20 blur-3xl -z-20" />

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-6 relative z-10 p-4">
            {featuredRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
