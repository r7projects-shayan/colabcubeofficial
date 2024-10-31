import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex-1 lg:px-3 sm:px-0 md:px-0 py-3 mx-5">
      <nav className="lg:inline">
        <FaBars
          onClick={toggleMenu}
          type="button"
          className="flex justify-end items-end align-items-end right-10 absolute lg:hidden text-2xl"
        />
        <div className="flex flex-1 items-center justify-end pb-2 w-full lg:border-b-2">
          <div className={`lg:block ${isOpen ? "flex flex-col" : "hidden"}`}>
            <div
              className={`flex items-center space-x-4 ${
                isOpen
                  ? "bg-zinc-200 z-10 p-2 rounded-md flex flex-col gap-2 items-center absolute right-20"
                  : ""
              }`}
            >
              {/* Nav Links */}
              <a
                href="/"
                className="text-decoration-none rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-zinc-400 hover:text-white"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="/users"
                className="text-decoration-none rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-zinc-400 hover:text-white"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#feature"
                className="text-decoration-none rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-zinc-400 hover:text-white"
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-decoration-none rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-zinc-400 hover:text-white"
              >
                Demo
              </a>
              <a
                href="#team"
                className="text-decoration-none rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-zinc-400 hover:text-white"
              >
                Team
              </a>
              <a
                href="#us"
                className="text-decoration-none rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-zinc-400 hover:text-white"
              >
                Why Choose Us
              </a>
              <a
                href="#contact"
                className="text-decoration-none rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-zinc-400 hover:text-white"
              >
                Contact us
              </a>

              {/* Authenticated and Unauthenticated Buttons */}
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal" />
                <SignUpButton mode="modal" />
              </SignedOut>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
