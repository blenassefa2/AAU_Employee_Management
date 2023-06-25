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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [evaluation, setEvaluation] = useState("white");
  const [evaluationText, setEvaluationText] = useState("black");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (evaluation == "white") setEvaluation("primary");
    else setEvaluation("white");
    if (evaluationText == "black") setEvaluationText("white");
    else setEvaluationText("black");
  };

  // useEffect(() => {
  //   const closeDropdown = () => {
  //     setIsDropdownOpen(false);
  //   };

  //   if (isDropdownOpen) {
  //     document.addEventListener("click", closeDropdown);
  //   } else {
  //     document.removeEventListener("click", closeDropdown);
  //   }

  //   return () => {
  //     document.removeEventListener("click", closeDropdown);
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
              route.push(goto);
            }}
          >
            <HiHome className="h-6 w-6 mr-2" />
            <span className="text-lg">Home</span>
          </li>
          {goto == "/hrexpert" && (
            <li
              className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded"
              onClick={() => {
                route.push(goto + "/employee-registration");
              }}
            >
              <HiUserAdd className="h-6 w-6 mr-2" />
              <span className="text-lg">Employee Registration</span>
            </li>
          )}
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
            className={`flex items-center mb-4 hover:bg-primary bg-${evaluation} text-${evaluationText} hover:text-white p-3 rounded`}
          >
            <HiClipboardList className="h-6 w-6 mr-2" />
            <span className="text-lg">Evaluation</span>
            <div className="ml-auto">
              <button
                className="text-lg"
                onClick={toggleDropdown}
                aria-label="Toggle Dropdown"
              >
                <HiChevronDown className="h-6 w-6 inline-block" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute mt-2 bg-white py-2 text-black shadow rounded">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <div
                      onClick={() => {
                        route.push(goto + "/self-evaluation");
                      }}
                    >
                      Self Evaluation
                    </div>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <div
                      onClick={() => {
                        route.push(goto + "/evaluate-others");
                      }}
                    >
                      Evaluate Others
                    </div>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <div
                      onClick={() => {
                        route.push(goto + "/evaluation-history");
                      }}
                    >
                      Evaluation History
                    </div>
                  </li>
                  {goto == "/hrexpert" && (
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <div
                        onClick={() => {
                          route.push(goto + "/create-evaluation-form");
                        }}
                      >
                        Create Evaluation Form
                      </div>
                    </li>
                  )}
                </ul>
              )}
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
          <li
            className="flex items-center mb-4 hover:bg-[#3B7CBD] hover:text-white p-3 rounded"
            onClick={() => {
              route.push(goto + "/appeal");
            }}
          >
            <HiClipboardCheck className="h-6 w-6 mr-2" />
            <span className="text-lg">Appeal</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
