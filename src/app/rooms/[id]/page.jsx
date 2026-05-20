import Image from "next/image";
import {
  FaWifi,
  FaProjectDiagram,
  FaChair,
  FaSnowflake,
  FaCoffee,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { MdMeetingRoom, MdDelete, MdEdit } from "react-icons/md";
import { IoFlash } from "react-icons/io5";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import DeleteMyRoom from "@/components/DeleteMyRoom";
import EditMyRoom from "@/components/EditMyRoom";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { GrUserManager } from "react-icons/gr";
import { RxTable } from "react-icons/rx";

const RoomDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user);
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`, {
    cache: "no-store",
  });

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
  const isOwner = user?.id === room?.ownerId;
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-12 px-4 md:px-8">
      {/* BLUR BACKGROUND */}
      <div className="fixed top-0 left-0 h-72 w-72 bg-cyan-200/40 blur-3xl rounded-full -z-10" />
      <div className="fixed bottom-0 right-0 h-72 w-72 bg-purple-200/40 blur-3xl rounded-full -z-10" />
      <Link href={"/rooms"}>
        <Button
          className={
            "rounded-none border-none bg-transparent hover:bg-blue-400"
          }
          variant="outline"
        >
          <FaArrowAltCircleLeft /> Back
        </Button>
      </Link>
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
                <h1 className="text-4xl font-black text-white">{roomName}</h1>

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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Amenities</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-100 px-5 py-4 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition duration-300"
                >
                  {item === "Wi-Fi" && <FaWifi className="text-cyan-500" />}

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
          <div className="sticky top-24 space-y-6">
            {/* PRICE CARD */}
            <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-2xl border border-white shadow-2xl p-8">
              <div className="absolute -top-20 -right-20 h-52 w-52 bg-cyan-200 blur-3xl rounded-full opacity-50" />

              <div className="mb-8">
                <p className="text-gray-500 mb-2">Price Per Hour</p>

                <h2 className="text-5xl font-black text-gray-800">
                  ${hourlyRate}
                  <span className="text-lg font-medium text-gray-400">/hr</span>
                </h2>
                <p className="text-gray-600 flex items-center mt-2 gap-1.5">
                  <GrUserManager /> {capacity}
                </p>
                <p className="text-gray-600 mt-2 flex items-center gap-1.5"><RxTable /> {floor}</p>
              </div>

              <BookingForm room={room} />

              {user && room.ownerId === user.id && (
                <div className="flex items-center justify-center gap-5 mt-8">
                  <EditMyRoom room={room} />
                  <DeleteMyRoom room={room} />
                </div>
              )}
            </div>

            {user && room.ownerId === user.id && (
              <div className="rounded-3xl bg-white/80 backdrop-blur-2xl border border-white shadow-xl p-6">
                <p className="text-sm text-gray-500 mb-4">Listed by</p>

                <div className="flex items-center gap-4">
                  <Avatar>
                    <Avatar.Image src={user?.image} alt={room?.owner?.name} />
                  </Avatar>

                  <div>
                    <p className="font-semibold text-gray-800">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
