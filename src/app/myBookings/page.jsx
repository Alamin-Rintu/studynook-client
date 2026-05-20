import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
  );
  const bookingData = await res.json();

  const totalBookings = bookingData?.length || 0;

  const totalSpent = bookingData?.reduce(
    (acc, item) => acc + (item.totalCost || 0),
    0,
  );

  const cancelled = 0;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl shadow bg-white border">
          <p className="text-gray-500">Total Bookings</p>
          <h2 className="text-3xl font-bold">{totalBookings}</h2>
        </div>

        <div className="p-6 rounded-2xl shadow bg-white border">
          <p className="text-gray-500">Cancelled</p>
          <h2 className="text-3xl font-bold">{cancelled}</h2>
        </div>

        <div className="p-6 rounded-2xl shadow bg-white border">
          <p className="text-gray-500">Total Spent</p>
          <h2 className="text-3xl font-bold text-cyan-600">${totalSpent}</h2>
        </div>
      </div>

      <div className="space-y-4">
        {bookingData?.length === 0 && (
          <p className="text-center text-gray-500">No bookings found</p>
        )}

        {bookingData?.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl border shadow bg-white"
          >
            <div className="w-full md:w-40 h-30 relative">
              <Image
                src={booking.imageUrl}
                alt={booking.roomName}
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <div className="flex-1 space-y-1">
              <h2 className="text-lg font-bold">{booking.roomName}</h2>

              <p className="text-sm text-gray-500">
                Date: {booking.date || "N/A"}
              </p>

              <p className="text-sm text-gray-500">
                Time: {booking.startTime}:00 - {booking.endTime}:00
              </p>

              <p className="text-sm text-gray-500">
                Duration: {booking.totalHours} hour(s)
              </p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                Confirmed
              </span>

              <p className="text-lg font-bold text-cyan-600">
                ${booking.totalCost}
              </p>

              <button className="text-sm text-red-500 hover:underline">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
