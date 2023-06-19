import React from "react";
import Image from "next/image";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import Navbar from "@/components/Login/NavBar";

const Login: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-white ">
        <div className="flex flex-col items-center bg-white rounded-lg p-8">
          <div className="mb-8">
            <Image src={require("../../public/login/AAUGate.png")} alt="logo" />
          </div>
          <div className="flex flex-col w-64 space-y-4">
            <div className="flex items-center bg-gray-200 p-2 rounded">
              <AiOutlineUser className="text-gray-500 h-5 w-5 mr-2" />
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center bg-gray-200 p-2 rounded">
              <AiOutlineLock className="text-gray-500 h-5 w-5 mr-2" />
              <input
                type="password"
                className="w-full focus:outline-none"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex  mt-4">
            <label className="flex items-left mr-40 text-gray-500">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 text-sm">
              Forget password?
            </a>
          </div>
          <button className="bg-primary text-white w-[100%] px-4 py-2 rounded mt-4">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
