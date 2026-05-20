"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathName = usePathname();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogOut = async () => {
    await authClient.signOut();
    setProfileOpen(false);
    setOpen(false);
  };

  // PUBLIC LINKS
  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
  ];

  // PRIVATE LINKS
  const privateLinks = [
    { name: "Add Room", href: "/addRoom" },
    { name: "My Listings", href: "/myListing" },
    { name: "My Bookings", href: "/myBookings" },
  ];

  const isActive = (href) => pathName === href;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Study Nook
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {publicLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Private links only if logged in */}
          {user &&
            privateLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    isActive(link.href)
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Loading */}
          {isPending ? (
            <span className="text-sm text-gray-500">Loading...</span>
          ) : user ? (
            <div className="hidden md:flex items-center gap-3 relative">

              {/* Avatar */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2"
              >
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    src={user?.image}
                  />
                  <Avatar.Fallback>
                    {user?.name?.[0]}
                  </Avatar.Fallback>
                </Avatar>
                <span className="text-sm font-medium">
                  {user?.name}
                </span>
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 top-12 w-48 bg-white border rounded-lg shadow-lg p-2 space-y-2">

                  <Link
                    href="/myListing"
                    onClick={() => setProfileOpen(false)}
                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    My Listings
                  </Link>

                  <Link
                    href="/myBookings"
                    onClick={() => setProfileOpen(false)}
                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    My Bookings
                  </Link>

                  <button
                    onClick={handleLogOut}
                    className="w-full flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <IoIosLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <Link className="text-blue-600" href="/login">
                Login
              </Link>
              <Link
                className="bg-blue-600 text-white px-3 py-1 rounded-md"
                href="/register"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t px-4 pb-4 space-y-3 bg-white">

          {/* Public */}
          {publicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700"
            >
              {link.name}
            </Link>
          ))}

          {/* Private */}
          {user &&
            privateLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-gray-700"
              >
                {link.name}
              </Link>
            ))}

          {/* Auth */}
          <div className="border-t pt-3">
            {user ? (
              <button
                onClick={handleLogOut}
                className="text-red-500 flex items-center gap-2"
              >
                <IoIosLogOut /> Logout
              </button>
            ) : (
              <div className="flex gap-4">
                <Link href="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link href="/register" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;