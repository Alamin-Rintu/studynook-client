import AllRoomsCard from "@/components/AllRoomsCard";
import AllRoomsFilters from "@/components/AllRoomsFilters";

const AllRoomsPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;

  const params = new URLSearchParams();

  if (resolvedSearchParams.search) {
    params.set("search", resolvedSearchParams.search);
  }

  if (resolvedSearchParams.amenities) {
    params.set("amenities", resolvedSearchParams.amenities);
  }

  if (resolvedSearchParams.floor) {
    params.set("floor", resolvedSearchParams.floor);
  }

  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?${params.toString()}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const rooms = await res.json();
  return (
    <div className="min-h-screen bg-zinc-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">
          All Study Rooms
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <AllRoomsFilters />
          </aside>

          <div className="lg:col-span-9">
            <p className="mb-6 text-gray-600">
              Showing <b>{rooms.length}</b> rooms
            </p>

            {rooms.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl">
                No rooms found
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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

