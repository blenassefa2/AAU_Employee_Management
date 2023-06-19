import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Image
          className="h-12 w-12 mr-2"
          src={require("../../public/AAULogo.png")}
          alt="logo"
        />
        <span className="text-white">አዲስ አበባ ዩኒቨርሲቲ</span>
      </div>
      <ul className="flex space-x-4 mr-10">
        <li>
          <Link
            href="#home"
            className="text-white hover:text-ee2e4e transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="text-white hover:text-ee2e4e transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="text-white hover:text-ee2e4e transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="#login"
            className="text-white hover:text-ee2e4e transition-colors duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
