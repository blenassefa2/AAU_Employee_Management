import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(<p></p>);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary flex items-center justify-between px-4 py-2 fixed w-full">
      <div className="flex items-center">
        <Image
          className="h-12 w-12 mr-2"
          src={require("../../public/AAULogo.png")}
          alt="logo"
        />
        <span className="text-white">
          <b className="text-white font-bold text-l">Addis Ababa University</b>
          <p className="text-white text-l">አዲስ አበባ ዩኒቨርሲቲ</p>
        </span>
      </div>
      <ul className="flex space-x-4 mr-10">
        <li>
          <Link
            href="/"
            className="text-white hover:text-ee2e4e transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-white hover:text-ee2e4e transition-colors duration-300"
            onClick={() => {
              setMessage(
                <p>
                  Created by Blen Assefa | Feruz Ahmed | Feven Demelash |
                  Kalkidan Belayneh @2023
                </p>
              );
              handleOpen();
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-white hover:text-ee2e4e transition-colors duration-300"
            onClick={() => {
              setMessage(
                <p>
                  Contact us on
                  <br /> Github:{" "}
                  <div className="text-primary">
                    https://github.com/FinalProjectGroup
                  </div>
                  <br /> email:
                  <div className="text-primary">
                    {" "}
                    FinalProjectGroup@gmail.com
                  </div>{" "}
                  <br />
                  linkedin:{" "}
                  <div className="text-primary">
                    linkedin.com/in/Final-Project-Group
                  </div>
                </p>
              );
              handleOpen();
            }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-white hover:text-ee2e4e transition-colors duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
      <Modal isOpen={isOpen} onClose={handleClose} message={message} />
    </nav>
  );
};

export default Navbar;
