"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const amenitiesList = [
  "Wi-Fi",
  "Whiteboard",
  "Projector",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
  "Coffee Area",
  "Smart TV",
];

const floorList = [
  "Ground Floor",
  "1st Floor",
  "2nd Floor",
  "3rd Floor",
  "4th Floor",
];

const AllRoomsFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [selectedAmenities, setSelectedAmenities] = useState(
    searchParams.get("amenities")
      ? searchParams.get("amenities").split(",")
      : []
  );

  const [selectedFloors, setSelectedFloors] = useState(
    searchParams.get("floor")
      ? searchParams.get("floor").split(",")
      : []
  );

  const toggle = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter((i) => i !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleFilter = () => {
    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (selectedAmenities.length)
      params.set("amenities", selectedAmenities.join(","));
    if (selectedFloors.length)
      params.set("floor", selectedFloors.join(","));

    router.push(`/rooms?${params.toString()}`);
  };

  const handleReset = () => {
    setSearch("");
    setSelectedAmenities([]);
    setSelectedFloors([]);
    router.push("/rooms");
  };

  return (
    <div className="bg-white p-6 rounded-3xl border">

      <div className="flex justify-between mb-4">
        <h2 className="font-bold">Filters</h2>

        <button onClick={handleReset} className="text-sm text-purple-600">
          Reset
        </button>
      </div>

      {/* SEARCH */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search rooms"
        className="w-full border p-2 rounded-xl mb-5"
      />

      {/* AMENITIES */}
      <h3 className="font-semibold mb-2">Amenities</h3>

      {amenitiesList.map((item) => (
        <label key={item} className="block">
          <input
            type="checkbox"
            checked={selectedAmenities.includes(item)}
            onChange={() =>
              toggle(selectedAmenities, setSelectedAmenities, item)
            }
          />
          {" "}{item}
        </label>
      ))}

      {/* FLOOR */}
      <h3 className="font-semibold mt-4 mb-2">Floor</h3>

      {floorList.map((item) => (
        <label key={item} className="block">
          <input
            type="checkbox"
            checked={selectedFloors.includes(item)}
            onChange={() => toggle(selectedFloors, setSelectedFloors, item)}
          />
          {" "}{item}
        </label>
      ))}

      <button
        onClick={handleFilter}
        className="w-full bg-purple-600 text-white py-2 rounded-xl mt-5"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default AllRoomsFilters;