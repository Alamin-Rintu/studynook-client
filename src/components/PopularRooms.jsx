import Link from "next/link";
import { Button } from "@heroui/react";
import AllRoomsCard from "@/components/AllRoomsCard";
import { BsHouseDown } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";

const PopularRoomsSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
    cache: "no-store",
  });

  const rooms = await res.json();
  const splitRooms = rooms.slice(0, 6);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
        {/* Left Side */}
        <div>
          <h3 className="text-4xl font-bold text-zinc-900 mb-2">
            Popular Study Rooms
          </h3>
          <p className="text-zinc-600 text-lg max-w-md">
            Handpicked quiet spaces for deep focus.
          </p>
        </div>

        {/* Right Side Button */}
        <div>
          <Link href={"/rooms"}>
            <Button
              size="lg"
              className="rounded-2xl px-8 py-6 text-base font-semibold 
                         border-2 border-zinc-900 text-zinc-900 
                         bg-transparent hover:bg-zinc-900 hover:text-white 
                         transition-all duration-300 active:scale-[0.98]"
            >
              View all Rooms <IoIosArrowDropright />
            </Button>
          </Link>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {splitRooms.map((room) => (
          <AllRoomsCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default PopularRoomsSection;
