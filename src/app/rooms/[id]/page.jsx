import Image from "next/image";
import {
  FaWifi,
  FaProjectDiagram,
  FaChair,
  FaSnowflake,
  FaCoffee,
} from "react-icons/fa";
import { MdMeetingRoom, MdDelete, MdEdit } from "react-icons/md";
import { IoFlash } from "react-icons/io5";

const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`,
    {
      cache: "no-store",
    }
  );

  const room = await res.json();

  const {
    roomName,
    description,
    imageUrl,
    floor,
    capacity,
    hourlyRate,
    amenities,
  } = room;

  // example owner control
  const isOwner = true;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-12 px-4 md:px-8">
      {/* BLUR BACKGROUND */}
      <div className="fixed top-0 left-0 h-72 w-72 bg-cyan-200/40 blur-3xl rounded-full -z-10" />
      <div className="fixed bottom-0 right-0 h-72 w-72 bg-purple-200/40 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">
          {/* IMAGE SECTION */}
          <div className="space-y-4">
            {/* MAIN IMAGE */}
            <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={imageUrl}
                alt={roomName}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <h1 className="text-4xl font-black text-white">
                  {roomName}
                </h1>

                <p className="text-gray-200 mt-2">{floor}</p>
              </div>
            </div>

            {/* GALLERY */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="relative h-32 overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={imageUrl}
                    alt="gallery"
                    fill
                    className="object-cover hover:scale-110 duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About This Room
            </h2>

            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* ROOM INFO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* FLOOR */}
            <div className="bg-white/80 border border-white shadow-lg rounded-3xl p-6 hover:-translate-y-1 duration-300">
              <div className="flex items-center gap-3 mb-3">
                <MdMeetingRoom className="text-2xl text-cyan-500" />

                <h3 className="font-semibold text-gray-800">Floor</h3>
              </div>

              <p className="text-gray-600">{floor}</p>
            </div>

            {/* CAPACITY */}
            <div className="bg-white/80 border border-white shadow-lg rounded-3xl p-6 hover:-translate-y-1 duration-300">
              <div className="flex items-center gap-3 mb-3">
                <FaChair className="text-xl text-purple-500" />

                <h3 className="font-semibold text-gray-800">Capacity</h3>
              </div>

              <p className="text-gray-600">{capacity}</p>
            </div>

            {/* BOOKINGS */}
            <div className="bg-white/80 border border-white shadow-lg rounded-3xl p-6 hover:-translate-y-1 duration-300">
              <div className="flex items-center gap-3 mb-3">
                <IoFlash className="text-xl text-yellow-500" />

                <h3 className="font-semibold text-gray-800">Bookings</h3>
              </div>

              <p className="text-gray-600">128+ Bookings</p>
            </div>
          </div>

          {/* AMENITIES */}
          <div className="bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Amenities
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-100 px-5 py-4 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition duration-300"
                >
                  {item === "Wi-Fi" && (
                    <FaWifi className="text-cyan-500" />
                  )}

                  {item === "Projector" && (
                    <FaProjectDiagram className="text-purple-500" />
                  )}

                  {item === "Air Conditioning" && (
                    <FaSnowflake className="text-sky-500" />
                  )}

                  {item === "Coffee Area" && (
                    <FaCoffee className="text-orange-400" />
                  )}

                  <span className="text-gray-700 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="sticky top-24">
            <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-2xl border border-white shadow-2xl p-8">
              {/* GLOW */}
              <div className="absolute -top-20 -right-20 h-52 w-52 bg-cyan-200 blur-3xl rounded-full opacity-50" />

              {/* PRICE */}
              <div className="mb-8">
                <p className="text-gray-500 mb-2">Price Per Hour</p>

                <h2 className="text-5xl font-black text-gray-800">
                  ${hourlyRate}

                  <span className="text-lg font-medium text-gray-400">
                    /hr
                  </span>
                </h2>
              </div>

              {/* FORM */}
              <div className="space-y-5">
                {/* DATE */}
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    Select Date
                  </label>

                  <input
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
                  />
                </div>

                {/* START TIME */}
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    Start Time
                  </label>

                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400">
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                  </select>
                </div>

                {/* END TIME */}
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    End Time
                  </label>

                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400">
                    <option>12:00 PM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM</option>
                  </select>
                </div>
              </div>

              {/* TOTAL */}
              <div className="mt-8 border-t border-slate-200 pt-6 flex items-center justify-between">
                <span className="text-gray-500">Total Cost</span>

                <h3 className="text-3xl font-bold text-gray-800">$30</h3>
              </div>

              {/* BOOK BUTTON */}
              <button className="relative mt-8 w-full overflow-hidden rounded-2xl py-4 font-bold text-lg text-white group shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 animate-pulse" />

                <span className="relative z-10">Book Now</span>
              </button>

              {/* OWNER CONTROLS */}
              {isOwner && (
                <div className="flex items-center justify-center gap-5 mt-8">
                  <button className="h-14 w-14 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition duration-300">
                    <MdEdit className="text-2xl text-cyan-600" />
                  </button>

                  <button className="h-14 w-14 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition duration-300">
                    <MdDelete className="text-2xl text-red-500" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;