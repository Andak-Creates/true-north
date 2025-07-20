"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SmallGradientButton from "./ui/SmallGradientButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className="fixed top-2 left-1/2 -translate-x-1/2 ml-auto 
        flex justify-between items-center w-[95%] lg:w-[90%] h-[80px] 
        border-2 border-[#E9EBF1] px-6 lg:px-10 rounded-full z-30 
        backdrop-blur-md "
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex flex-row justify-center
        items-center gap-[3px]"
        >
          <img src="/logo.png" alt="" className="w-[20px] h-[30px]" />
          <h1 className="font-bold text-[25px]">TrueNorth</h1>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        {/* Get Quote Button*/}
        <Link href="/get-quote" className="hidden md:block">
          <SmallGradientButton text="Get Qoute" fontSize={16} />
        </Link>

        {/* Burger Icon */}
        <button
          className="md:hidden text-black"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 
        p-6 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        {/* Close Icon */}
        <div className="flex justify-end mr-6 mt-4">
          <button onClick={toggleSidebar} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex justify-center items-center h-[80%]">
          <ul className="mt-10 flex flex-col justify-center items-center gap-4 font-semibold text-lg">
            <li>
              <Link href="/" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={toggleSidebar}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={toggleSidebar}>
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleSidebar}>
                Contact
              </Link>
            </li>
            <Link href="#get-quote" className="mt-4 " onClick={toggleSidebar}>
              <SmallGradientButton text="Get Quote" fontSize={16} />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
