import React, { useState, useEffect } from 'react';
import { HiHome, HiUserAdd, HiUsers, HiClipboardList, HiUserCircle, HiClipboardCheck, HiChevronDown } from 'react-icons/hi';

const Sidebar = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // useEffect(() => {
  //   const closeDropdown = () => {
  //     setIsDropdownOpen(false);
  //   };

  //   if (isDropdownOpen) {
  //     document.addEventListener('click', closeDropdown);
  //   } else {
  //     document.removeEventListener('click', closeDropdown);
  //   }

  //   return () => {
  //     document.removeEventListener('click', closeDropdown);
  //   };
  // }, [isDropdownOpen]);

  return (
    <aside className="bg-white text-black w-72 flex flex-col  border rounded border-gray-400 shadow-xl ml-4 h-screen">
      <nav className="flex-grow">
        <ul className="p-4">
          <li className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded">
            <HiHome className="h-6 w-6 mr-2" />
            <span className="text-lg">Home</span>
          </li>
          <li className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded">
            <HiUserAdd className="h-6 w-6 mr-2" />
            <span className="text-lg">Employee Registration</span>
          </li>
          <li className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded">
            <HiUsers className="h-6 w-6 mr-2" />
            <span className="text-lg">All Employees</span>
          </li>
          <li className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded">
            <HiClipboardList className="h-6 w-6 mr-2" />
            <span className="text-lg">Evaluation</span>
            <div className="ml-auto">
              <button
                className="text-lg"
                // onClick={toggleDropdown}
                aria-label="Toggle Dropdown"
              >
                <HiChevronDown className="h-6 w-6 inline-block" />
              </button>
              {/* {isDropdownOpen && (
                <ul className="absolute mt-2 py-2 bg-white shadow rounded">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="#">Evaluate Myself</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="#">Evaluate My College</a>
                  </li>
                </ul>
              )} */}
            </div>
          </li>
          <li className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded">
            <HiUserCircle className="h-6 w-6 mr-2" />
            <span className="text-lg">My Profile</span>
          </li>
          <li className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded">
            <HiClipboardCheck className="h-6 w-6 mr-2" />
            <span className="text-lg">Leave Request</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
