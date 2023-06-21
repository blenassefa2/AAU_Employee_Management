import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import Navbar from "@/components/Login/NavBar";
import { useLoginMutation } from "@/redux/slices/auth/authApiSlice";
import { useRouter } from "next/router";
import { setCredentials } from "@/redux/slices/auth/authSlice";
import Link from "next/link";
import { Modal } from "@/components/Modal/Modal";
const Login: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col z-0 items-center justify-center h-screen bg-white ">
        <div className="flex flex-col items-center bg-white rounded-lg p-8">
          <div className="mb-8">
            <Image src={require("../../public/login/AAUGate.png")} alt="logo" />
          </div>
          <div className="flex flex-col w-64 space-y-4">
            <div className="flex items-center bg-gray-200 p-2 rounded">
              <AiOutlineUser className="text-gray-500 h-5 w-5 mr-2" />
              <input
                type="text"
                className="w-full text-black pl-3 focus:outline-none"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center bg-gray-200 p-2 rounded">
              <AiOutlineLock className="text-gray-500 h-5 w-5 mr-2" />
              <input
                type="password"
                className="w-full text-black pl-3 focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex  mt-4">
            <label className="flex items-left mr-40 text-gray-500">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
            <Link
              href="#"
              className="text-blue-500 text-sm"
              onClick={handleOpen}
            >
              Forget password?
            </Link>
          </div>
          <button
            className="bg-primary text-white w-[100%] px-4 py-2 rounded mt-4"
            onClick={async function handle() {
              const userData = await login({
                email,
                password,
              }).unwrap();
              console.log(userData.data.token);

              dispatch(setCredentials(userData.data));

              router.push(`/${userData.data.role}`);
            }}
          >
            Login
          </button>
          <Modal
            isOpen={isOpen}
            onClose={handleClose}
            message={`Your request has been sent to our HR Experts. They will look in to your issue and reset your password keep an eye for an email regarding this issue within 5 business days(don't forget checking spam too) \n Thank you!`}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
