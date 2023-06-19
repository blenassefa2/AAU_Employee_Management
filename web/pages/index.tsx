import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Welcome: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-center rounded-full bg-primary w-32 h-32">
          <Image
            className="w-32 h-32"
            src={require("../public/AAULogo.png")}
            alt="logo"
          />
        </div>
        <div className="flex flex-col items-start mt-8">
          <h1 className="text-4xl font-bold text-primary">Human Resource</h1>
          <p className="text-base font-bold text-black">Management System</p>
          <p className="text-sm text-primary mt-2">
            This website is designed to provide service for
            <br />
            Employees, Statisticians and HR managers at
            <br />
            Addis Ababa University Human Resource Management System.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <Image
          className="w-[100%] pl-40"
          src={require("../public/homepagePic.png")}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Welcome;
