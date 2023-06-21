import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  HiHome,
  HiUserAdd,
  HiUsers,
  HiClipboardList,
  HiUserCircle,
  HiClipboardCheck,
  HiChevronDown,
} from "react-icons/hi";

type SidebarProps = {
  goto: string;
};

const Sidebar = ({ goto }: SidebarProps) => {
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
  const route = useRouter();

  return (
    <aside className="bg-white mt-[3rem] text-black w-72 flex flex-col  border rounded border-gray-400 shadow-xl ml-0 h-[100%]">
      <nav className="flex-grow ">
        <ul className="p-4">
          <li
            className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded"
            onClick={() => {
              route.push("/");
            }}
          >
            <HiHome className="h-6 w-6 mr-2" />
            <span className="text-lg">Home</span>
          </li>
          <li
            className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded"
            onClick={() => {
              route.push(goto + "/employee-registration");
            }}
          >
            <HiUserAdd className="h-6 w-6 mr-2" />
            <span className="text-lg">Employee Registration</span>
          </li>
          <li
            className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded"
            onClick={() => {
              route.push(goto + "/all-employees");
            }}
          >
            <HiUsers className="h-6 w-6 mr-2" />
            <span className="text-lg">All Employees</span>
          </li>
          <li
            className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded"
            onClick={() => {
              route.push(goto + "/evaluation");
            }}
          >
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
          <li
            className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded"
            onClick={() => {
              route.push(goto + "/my-profile");
            }}
          >
            <HiUserCircle className="h-6 w-6 mr-2" />
            <span className="text-lg">My Profile</span>
          </li>
          <li
            className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded"
            onClick={() => {
              route.push(goto + "/leave-request");
            }}
          >
            <HiClipboardCheck className="h-6 w-6 mr-2" />
            <span className="text-lg">Leave Request</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
