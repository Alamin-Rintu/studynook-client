import React from "react";
import AllRoomsCard from "@/components/AllRoomsCard";

const AllRoomsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
    cache: "no-store",
  });

  const rooms = await res.json();

  return (
    <div className="min-h-screen bg-zinc-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">All Study Rooms</h1>
          <p className="text-gray-600 mt-2">
            Find the perfect space for your study sessions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDEBAR FILTERS */}
          <aside className="lg:col-span-3">
            <div
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100
               lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>

                <button className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                  Reset All
                </button>
              </div>

              {/* SEARCH */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search rooms..."
                  className="w-full h-12 px-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-violet-400"
                />
              </div>

              {/* AMENITIES */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-700 mb-3">Amenities</h3>
                <div className="space-y-3">
                  {[
                    "Wi-Fi",
                    "Whiteboard",
                    "Projector",
                    "Air Conditioner",
                    "Power Outlet",
                    "Natural Light",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-violet-600 rounded"
                      />
                      <span className="text-gray-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* PRICE */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-700 mb-3">
                  Price Range (per hour)
                </h3>

                <input
                  type="range"
                  min="0"
                  max="200"
                  className="w-full accent-violet-600"
                />

                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>৳0</span>
                  <span>৳200</span>
                </div>
              </div>

              {/* CAPACITY */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-700 mb-3">Capacity</h3>

                <div className="grid grid-cols-2 gap-3">
                  {["1-2", "2-4", "4-6", "6-8"].map((cap) => (
                    <label
                      key={cap}
                      className="flex items-center gap-3 cursor-pointer border border-gray-200 hover:border-violet-200 rounded-2xl p-3"
                    >
                      <input type="checkbox" className="accent-violet-600" />
                      <span>{cap} People</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* FLOOR */}
              <div className="mb-2">
                <h3 className="font-medium text-gray-700 mb-3">Floor</h3>

                <div className="space-y-3">
                  {[
                    "Ground Floor",
                    "1st Floor",
                    "2nd Floor",
                    "3rd Floor",
                    "4th Floor",
                  ].map((floor) => (
                    <label
                      key={floor}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input type="checkbox" className="accent-violet-600" />
                      <span className="text-gray-700">{floor}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-9">
            {/* TOP BAR */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {rooms?.length || 0}
                </span>{" "}
                rooms
              </p>

              <select className="bg-white border border-gray-200 rounded-2xl px-6 py-3 text-sm focus:outline-none focus:border-violet-400">
                <option value="">Sort by: Recommended</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="new">Newest Added</option>
              </select>
            </div>

            {/* ROOMS GRID */}
            {rooms?.length === 0 ? (
              <div className="bg-white rounded-3xl py-20 flex flex-col items-center justify-center border border-gray-100">
                <div className="text-6xl mb-6">🏠</div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  No rooms found
                </h3>
                <p className="text-gray-500 mt-2 text-center max-w-xs">
                  Try changing your filters or search terms
                </p>
                <button className="mt-8 px-8 py-3.5 bg-violet-600 text-white rounded-2xl hover:bg-violet-700 transition">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {rooms.map((room) => (
                  <AllRoomsCard key={room._id} room={room} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRoomsPage;
