import React, { useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "@/redux/slices/auth/authSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import { url } from "inspector";

const Home = () => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const route = useRouter();

  return (
    // eslint-disable-next-line react/no-children-prop
    <div className="bg-white">
      <>
        <Layout page="employee">
          <div className="flex  bg-white mt-[6rem] h-screen">
            <div className="text-black rounded border w-[80%] h-[60%] ml-[10%]  border-dark-300 ">
              <div className="bg-[#3B7CBD] py-4 text-white rounded text-center w-full">
                <div className="text-left">My Profile</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center justify-end">
                  <img
                    className="h-40 w-40 mr-20 rounded-full"
                    src="https://res.cloudinary.com/drowvugep/image/upload/v1682327009/user1Photo_j83qgp.png"
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <div>
                    <span className="font-bold">Name:</span> John Doe
                  </div>
                  <div>
                    <span className="font-bold">ID:</span> 123456
                  </div>
                  <div>
                    <span className="font-bold">Phone Number:</span>{" "}
                    123-456-7890
                  </div>
                  <div>
                    <span className="font-bold">Email:</span>{" "}
                    john.doe@example.com
                  </div>
                  <div>
                    <span className="font-bold">Department:</span> Sales
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    </div>
  );
};

export default Home;
