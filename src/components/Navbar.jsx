"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { ClockLoader } from "react-spinners";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="container mx-auto flex justify-between items-center p-5 border-b">
      <div>
        <h3 className="text-2xl font-bold">Study Nook</h3>
      </div>
      <ul className="flex items-center gap-2">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/rooms"}>Rooms</Link>
        </li>
        <li>
          <Link href={"/addRoom"}>Add Room</Link>
        </li>
        <li>
          <Link href={"/myListing"}>My Listing</Link>
        </li>
        <li>
          <Link href={"/myBookings"}>My Bookings</Link>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        {isPending ? (
          <ClockLoader size={25} />
        ) : user ? (
          <>
            <Avatar>
              <Avatar.Image
                referrerPolicy="no-referrer"
                alt="John Doe"
                src={user?.image}
              />
              <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
            </Avatar>
            <Button
              onClick={handleLogOut}
              className={"text-red-500 rounded-lg"}
              variant="outline"
            >
              Log Out <IoIosLogOut />
            </Button>
          </>
        ) : (
          <>
            {" "}
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
