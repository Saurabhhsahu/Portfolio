import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-6 text-white">
      {/* Left: Logo */}
      <div className="text-2xl sm:text-3xl font-bold cursor-pointer">
        Saurabh Sahu
      </div>

      {/* Right: Menu for large screens */}
      <ul className="hidden md:flex md:gap-6 lg:gap-10 text-lg">
        <li className="cursor-pointer hover:text-[#ff715b] hover:underline">Home</li>
        <li className="cursor-pointer hover:text-[#ff715b] hover:underline">About</li>
        <li className="cursor-pointer hover:text-[#ff715b] hover:underline">Projects</li>
        <li className="cursor-pointer hover:text-[#ff715b] hover:underline">Contact</li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full text-white flex flex-col items-center py-4 transition-all duration-300
         ${menuOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col gap-6 text-lg">
          <li className="cursor-pointer hover:text-[#ff715b] hover:underline" onClick={() => setMenuOpen(false)}>Home</li>
          <li className="cursor-pointer hover:text-[#ff715b] hover:underline" onClick={() => setMenuOpen(false)}>About</li>
          <li className="cursor-pointer hover:text-[#ff715b] hover:underline" onClick={() => setMenuOpen(false)}>Projects</li>
          <li className="cursor-pointer hover:text-[#ff715b] hover:underline" onClick={() => setMenuOpen(false)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
