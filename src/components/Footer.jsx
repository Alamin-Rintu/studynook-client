"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiBookOpen,
  FiClock,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#060B1F] text-white border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-90 h-90 bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-90 h-90 bg-blue-600/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Newsletter */}
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <FiMail className="w-8 h-8 text-white" />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Stay in the loop with{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  StudyNook
                </span>
              </h2>

              <p className="text-gray-400 mt-2 max-w-xl">
                Get updates on new rooms, premium features and exclusive
                productivity tips.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex w-full lg:w-auto items-center rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent px-5 py-4 outline-none w-full lg:w-80 text-white placeholder:text-gray-500"
            />

            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">
                Study
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Nook
                </span>
              </h1>
            </div>

            <p className="text-gray-400 mt-6 leading-8">
              Find, book, and manage the perfect study rooms in your library.
              Stay focused. Stay productive.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              {[
                { icon: <FaFacebookF />, color: "hover:text-blue-400" },
                { icon: <FaXTwitter />, color: "hover:text-white" },
                { icon: <FaLinkedinIn />, color: "hover:text-cyan-400" },
                { icon: <FaInstagram />, color: "hover:text-pink-400" },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={`w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 transition-all duration-300 ${item.color}`}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "Home",
                "All Rooms",
                "Add Room",
                "My Listings",
                "My Bookings",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "About Us",
                "Privacy Policy",
                "Terms & Conditions",
                "Help Center",
                "Support",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Owners */}
          <div>
            <h3 className="text-xl font-semibold mb-6">For Owners</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                "List Your Room",
                "Owner Guide",
                "Success Stories",
                "Room Earnings",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <FiMail className="text-purple-400 mt-1" />
                <p>support@studynook.com</p>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="text-purple-400 mt-1" />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="text-purple-400 mt-1" />
                <p>Chattogram, Bangladesh</p>
              </div>

              <div className="flex items-start gap-3">
                <FiClock className="text-purple-400 mt-1" />
                <p>Mon - Fri : 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <FiShield className="text-purple-400" />
            </div>

            <div>
              <h4 className="font-semibold">Secure Booking</h4>
              <p className="text-sm text-gray-400">Your data is protected</p>
            </div>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-gray-400">
              © 2026 StudyNook. All rights reserved.
            </p>

            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center gap-2">
              Made with <HiSparkles className="text-purple-400" /> for students
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <HiSparkles className="text-blue-400" />
            </div>

            <div>
              <h4 className="font-semibold">Trusted by 10K+ Students</h4>
              <p className="text-sm text-gray-400">Across 500+ Libraries</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
