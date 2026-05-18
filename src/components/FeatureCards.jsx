import React from "react";
import { MdFlashOn, MdVerified, MdEventAvailable } from "react-icons/md";

const features = [
  {
    title: "Instant Booking",
    desc: "Book your study room in seconds with our smart calendar.",
    icon: MdFlashOn,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Quiet Verified Spaces",
    desc: "Hand-verified rooms with noise levels and comfort ratings.",
    icon: MdVerified,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Conflict-Free Scheduling",
    desc: "Real-time availability and automatic conflict prevention.",
    icon: MdEventAvailable,
    color: "from-blue-500 to-cyan-600",
  },
];

const FeatureCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-zinc-900 mb-3">
          Why Choose StudyNook?
        </h2>
        <p className="text-zinc-600 text-lg max-w-md mx-auto">
          Premium experience, thoughtful details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-8 border border-zinc-100 
                         shadow-sm hover:shadow-2xl transition-all duration-500 
                         hover:-translate-y-3 flex flex-col"
            >
              {/* Icon Container */}
              <div className="mb-8">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} 
                             text-white shadow-lg shadow-zinc-200 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-zinc-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-[15.5px]">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Bottom Accent */}
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <div className="h-1.5 w-12 bg-gradient-to-r rounded-full transition-all group-hover:w-20" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
