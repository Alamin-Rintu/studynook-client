"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, Surface } from "@heroui/react";
import toast from "react-hot-toast";

const BookingForm = ({ room }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("8");
  const [endTime, setEndTime] = useState("9");

  const hourlyRate = room?.hourlyRate || 0;

  const totalHours = parseInt(endTime) - parseInt(startTime);
  const totalCost = totalHours * hourlyRate;

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingData = {
      userId: user?.id,

      roomId: room?._id,
      roomName: room?.roomName,
      imageUrl: room?.imageUrl,
      pricePerHour: room?.hourlyRate,

      date,
      startTime,
      endTime,

      totalHours: parseInt(endTime) - parseInt(startTime),
      totalCost:
        (parseInt(endTime) - parseInt(startTime)) * (room?.hourlyRate || 0),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();

    if (data.success) {
      toast.success(`${room.roomName} booked successfully`);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div>
      <Modal>
        {/* OPEN BUTTON */}
        <Button className="relative mt-8 w-full overflow-hidden rounded-2xl py-6 font-bold text-lg text-white shadow-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 hover:scale-[1.02] transition-transform duration-300">
          Book Now
        </Button>

        {/* MODAL */}
        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="sm:max-w-lg rounded-3xl">
              <Modal.CloseTrigger />

              {/* HEADER */}
              <Modal.Header>
                <div>
                  <Modal.Heading className="text-2xl font-bold">
                    Book Study Room
                  </Modal.Heading>

                  <p className="mt-2 text-sm text-muted">
                    Choose your preferred date and time slot.
                  </p>
                </div>
              </Modal.Header>

              {/* BODY */}
              <Modal.Body className="p-6">
                <Surface
                  variant="default"
                  className="rounded-3xl border border-slate-200 p-5"
                >
                  <form className="space-y-5">
                    {/* DATE */}
                    <div>
                      <label className="text-sm text-gray-600 block mb-2">
                        Select Date
                      </label>

                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
                      />
                    </div>

                    {/* START TIME */}
                    <div>
                      <label className="text-sm text-gray-600 block mb-2">
                        Start Time
                      </label>

                      <select
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
                      >
                        <option value="8">08:00 AM</option>
                        <option value="9">09:00 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="12">12:00 PM</option>
                        <option value="13">01:00 PM</option>
                        <option value="14">02:00 PM</option>
                        <option value="15">03:00 PM</option>
                      </select>
                    </div>

                    {/* END TIME */}
                    <div>
                      <label className="text-sm text-gray-600 block mb-2">
                        End Time
                      </label>

                      <select
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
                      >
                        <option value="9">09:00 AM</option>
                        <option value="10">10:00 AM</option>
                        <option value="11">11:00 AM</option>
                        <option value="12">12:00 PM</option>
                        <option value="13">01:00 PM</option>
                        <option value="14">02:00 PM</option>
                        <option value="15">03:00 PM</option>
                        <option value="16">04:00 PM</option>
                      </select>
                    </div>

                    {/* TOTAL */}
                    <div className="border-t border-slate-200 pt-6 flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 font-medium">Total Cost</p>

                        <p className="text-sm text-gray-400">
                          {totalHours} Hour × ${hourlyRate}
                        </p>
                      </div>

                      <h3 className="text-3xl font-bold text-cyan-600">
                        ${totalCost}
                      </h3>
                    </div>

                    {/* FOOTER */}
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>

                      <Button
                        onClick={handleBooking}
                        type="submit"
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      >
                        Confirm Booking
                      </Button>
                    </Modal.Footer>
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

export default BookingForm;
