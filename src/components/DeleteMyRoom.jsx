"use client";
import { AlertDialog, Button } from "@heroui/react";
import { MdDelete } from "react-icons/md";

const DeleteMyRoom = ({room}) => {
    console.log(room)
  return (
    <div>
        <AlertDialog>
          <Button className="h-14 w-14 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition duration-300">
            <MdDelete className="text-2xl text-red-500" />
          </Button>
          <AlertDialog.Backdrop>
            <AlertDialog.Container>
              <AlertDialog.Dialog className="sm:max-w-[400px]">
                <AlertDialog.CloseTrigger />
                <AlertDialog.Header>
                  <AlertDialog.Icon status="danger" />
                  <AlertDialog.Heading>
                    Delete {room?.roomName} room permanently?
                  </AlertDialog.Heading>
                </AlertDialog.Header>
                <AlertDialog.Body>
                  <p>
                    This will permanently delete{" "}
                    <strong>{room?.roomName}</strong> and all of its data.
                    This action cannot be undone.
                  </p>
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button slot="close" variant="tertiary">
                    Cancel
                  </Button>
                  <Button slot="close" variant="danger">
                    Delete Room
                  </Button>
                </AlertDialog.Footer>
              </AlertDialog.Dialog>
            </AlertDialog.Container>
          </AlertDialog.Backdrop>
        </AlertDialog>
    </div>
  );
};

export default DeleteMyRoom;
