"use client";

import { Button, Input, Label, Modal, Surface, TextArea } from "@heroui/react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const EditMyRoom = ({ room }) => {
  const router = useRouter();
  const { _id, roomName, description, imageUrl, floor, capacity, hourlyRate } =
    room;

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

  const [open, setOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const selectedAmenities = Array.from(
      form.querySelectorAll('input[type="checkbox"]:checked'),
    ).map((el) => el.value);

    const updatedRoom = {
      roomName: form.roomName.value,
      description: form.description.value,
      imageUrl: form.imageUrl.value,
      floor: form.floor.value,
      capacity: form.capacity.value,
      hourlyRate: Number(form.hourlyRate.value),
      amenities: selectedAmenities,
    };

    const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updatedRoom),
      },
    );
    const data = await res.json();

    if (data) {
      toast.success("Room updated successfully!");

      router.refresh();
    } else {
      toast.error("Update failed!");
    }
  };

  return (
    <div>
      <Button
        onPress={() => setOpen(true)}
        className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition"
      >
        <MdEdit className="text-xl sm:text-2xl text-cyan-600" />
      </Button>

      <Modal isOpen={open} onOpenChange={setOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Edit My Room</Modal.Heading>
                <p className="text-sm text-muted">
                  Update your study room details
                </p>
              </Modal.Header>

              <Modal.Body className="max-h-[75vh] overflow-y-auto p-4 sm:p-6">
                <Surface>
                  <form onSubmit={onSubmit} className="space-y-6">
                    {/* BASIC INFO */}
                    <section className="space-y-4 border p-4 rounded-xl bg-white">
                      <div>
                        <Label>Room Name</Label>
                        <Input
                          name="roomName"
                          defaultValue={roomName}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <Label>Description</Label>
                        <TextArea
                          name="description"
                          defaultValue={description}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <Label>Image URL</Label>
                        <Input
                          name="imageUrl"
                          className="w-full"
                          defaultValue={imageUrl}
                          type="url"
                        />
                      </div>
                    </section>

                    {/* DETAILS */}
                    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 border p-4 rounded-xl bg-white">
                      <select
                        className="border p-1 rounded-xl shadow"
                        name="floor"
                        defaultValue={floor}
                      >
                        {floors.map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                      </select>

                      <select
                        className="border p-1 rounded-xl shadow"
                        name="capacity"
                        defaultValue={capacity}
                      >
                        {capacities.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>

                      <Input
                        name="hourlyRate"
                        type="number"
                        defaultValue={hourlyRate}
                      />
                    </section>

                    {/* AMENITIES */}
                    <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 border p-4 rounded-xl bg-white">
                      {amenities.map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-2 border p-2 rounded-lg"
                        >
                          <input
                            type="checkbox"
                            value={item}
                            defaultChecked={room?.amenities?.includes(item)}
                          />
                          {item}
                        </label>
                      ))}
                    </section>

                    {/* BUTTONS */}
                    <div className="flex justify-end gap-3">
                      <Button
                        type="button"
                        onPress={() => setOpen(false)}
                        variant="outline"
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        slot="close"
                        className="text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #7C3AED, #3B82F6)",
                        }}
                      >
                        Update Room
                      </Button>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditMyRoom;
