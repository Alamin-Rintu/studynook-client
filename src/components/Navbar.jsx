import Link from "next/link";

const Navbar = () => {
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
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
