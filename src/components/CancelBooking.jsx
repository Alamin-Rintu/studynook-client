"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CancelBooking = ({ bookingId, roomName }) => {
  const router = useRouter();

  const handleDeleteBooking = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,
      {
        method: "DELETE",
      },
    );

    const data = await res.json();

    if (data) {
      toast.success("Booking cancelled");
      router.refresh();
    } else {
      toast.error("Delete failed");
    }
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button
          variant="outline"
          className="text-sm text-red-500 rounded-xl hover:underline"
        >
          Cancel
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>Cancel booking?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                You are about to cancel <strong>{roomName}</strong>.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                No
              </Button>

              <Button variant="danger" onClick={handleDeleteBooking}>
                Yes, Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelBooking;
