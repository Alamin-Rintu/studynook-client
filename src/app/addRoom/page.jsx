"use client";

import { Button, Input, Label, TextArea, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";


const floors = [
  "Ground Floor",
  "1st Floor",
  "2nd Floor",
  "3rd Floor",
  "4th Floor",
];

const capacities = [
  "1-2 People",
  "2-4 People",
  "4-6 People",
  "6-8 People",
  "10+ People",
];

const amenities = [
  "Wi-Fi",
  "Whiteboard",
  "Projector",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
  "Coffee Area",
  "Smart TV",
];

const AddRoomPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const roomsData = Object.fromEntries(formData.entries());

    const selectedAmenities = Array.from(
      e.currentTarget.querySelectorAll('input[type="checkbox"]:checked'),
    ).map((el) => el.value);

    roomsData.amenities = selectedAmenities;
    roomsData.ownerId = user?.id;

    console.log(roomsData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(roomsData),
    });
    const rooms = await res.json();
    if (rooms) {
      toast.success("Successfully added Rooms");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-5 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={onSubmit}
          className="max-w-4xl mx-auto rounded-3xl bg-white shadow-xl border border-gray-200 overflow-hidden"
        >
          {/* HEADER */}
          <div className="border-b border-gray-200 px-6 py-10 bg-white">
            <h1 className="text-4xl font-black">
              Add New <span className="text-violet-600">Study Room</span>
            </h1>

            <p className="mt-3 text-gray-500 max-w-2xl">
              Create a premium study environment with modern facilities.
            </p>
          </div>

          <div className="space-y-10 p-6 bg-gray-50">
            {/* BASIC INFO */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 space-y-6">
              <TextField>
                <Label className="text-gray-700 mb-2 block">Room Name *</Label>
                <Input
                  name="roomName"
                  placeholder="Ex: Silent Study Hub"
                  className="h-12 w-full rounded-xl border border-gray-300 px-3"
                />
              </TextField>

              <TextField>
                <Label className="text-gray-700 mb-2 block">
                  Description *
                </Label>
                <TextArea
                  name="description"
                  placeholder="Describe the room..."
                  className="w-full rounded-xl border border-gray-300 p-3"
                />
              </TextField>

              <TextField>
                <Label className="text-gray-700 mb-2 block">Image URL *</Label>
                <Input
                  name="imageUrl"
                  type="url"
                  placeholder="Enter image URL"
                  className="h-12 w-full rounded-xl border border-gray-300 px-3"
                />
              </TextField>
            </section>

            {/* DETAILS */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <select name="floor" className="h-12 border rounded-xl px-3">
                  <option value="">Select Floor</option>
                  {floors.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>

                <select name="capacity" className="h-12 border rounded-xl px-3">
                  <option value="">Select Capacity</option>
                  {capacities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <Input
                  name="hourlyRate"
                  type="number"
                  placeholder="Hourly Rate"
                  className="h-12 w-full rounded-xl border border-gray-300 px-3"
                />
              </div>
            </section>

            {/* AMENITIES */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2"
                  >
                    <input type="checkbox" value={item} />
                    <span className="text-sm text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* BUTTONS */}
            <div className="flex items-center justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                className={"h-12 px-6 rounded-xl font-medium"}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="h-12 px-6 rounded-xl text-white font-medium"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #3B82F6)",
                }}
              >
                Add Room
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoomPage;
