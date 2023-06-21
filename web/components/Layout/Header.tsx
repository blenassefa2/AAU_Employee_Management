import { useState } from "react";
import React from "react";
import Link from "next/link";
import { HiBell, HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import { Modal } from "../Modal/Modal";
import ChangePasswordForm from "../Common/ChangePasswordForm";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  className="h-12 w-12 mr-2"
                  src={require("../../public/AAULogo.png")}
                  alt="logo"
                />
                <div>
                  <b className="text-white font-bold text-xl">
                    Addis Ababa University
                  </b>
                  <p className="text-white text-xl">አዲስ አበባ ዩኒቨርሲቲ</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="relative inline-block mr-4">
              <button
                type="button"
                className="bg-[#3B7CBD] text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
              >
                <HiBell className="h-6 w-6" />
              </button>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-red-500 text-xs text-white font-bold rounded-full">
                2
              </span>
            </div>
            <div className="ml-3 mr-4">
              {" "}
              {/* Added mr-4 for right margin */}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="bg-[#3B7CBD] flex text-white items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    <HiChevronDown className="h-5 w-5" />
                  </button>
                </div>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex={-1}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                      >
                        Logout
                      </a>
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                        onClick={handleOpen}
                      >
                        Change Password
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        onClose={handleClose}
        message={<ChangePasswordForm />}
      />
    </nav>
  );
};

export default Header;
