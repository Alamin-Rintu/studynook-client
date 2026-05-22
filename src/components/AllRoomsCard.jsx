import React from "react";
import Image from "next/image";
import { MdPeople, MdStar, MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { Button } from "@heroui/react";

const AllRoomsCard = ({ room }) => {
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* IMAGE SECTION */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={
            room.imageUrl && room.imageUrl.trim() !== ""
              ? room.imageUrl
              : "/fallback-room.jpg"
          }
          alt={room.roomName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold shadow">
          ${room.hourlyRate}/hr
        </div>

        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm">
          <MdStar className="text-yellow-400" />
          4.8
        </div>
      </div>

      {/* CONTENT (flex-1 added here) */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
          {room.roomName}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">{room.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MdPeople className="text-violet-500" />
            <span>{room.capacity}</span>
          </div>

          <div className="flex items-center gap-1">
            <MdLocationOn className="text-blue-500" />
            <span>{room.floor}</span>
          </div>
        </div>

        {/* AMENITIES */}
        <div className="flex flex-wrap gap-2 pt-2">
          {room.amenities?.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* BUTTON pushed to bottom */}
        <div className="mt-auto pt-4">
          <Button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:opacity-90 transition">
            <Link href={`/rooms/${room._id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllRoomsCard;
