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
import { useGetUserQuery } from "@/redux/slices/users/usersApiSlice";

const Home = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery({});
  if (isSuccess) {
    const user = data.data;
    return (
      // eslint-disable-next-line react/no-children-prop
      <div className="bg-white">
        <>
          <Layout page="hrexpert">
            <div className="flex  bg-white mt-[6rem] h-screen">
              <div className="text-black rounded border w-[80%] h-[60%] ml-[10%]  border-dark-300 ">
                <div className="bg-[#3B7CBD] py-4 text-white rounded text-center w-full">
                  My Profile
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center justify-end">
                    <img
                      className="h-40 w-40 mr-20 rounded-full"
                      src={user.photoUrl}
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <span className="font-bold">Name:</span> {user.firstName}{" "}
                      {user.lastName}
                    </div>
                    <div>
                      <span className="font-bold">ID:</span> {user._id}
                    </div>
                    <div>
                      <span className="font-bold">Phone Number:</span>{" "}
                      {user.phoneNumber}
                    </div>
                    <div>
                      <span className="font-bold">Email:</span> {user.email}
                    </div>
                    <div>
                      <span className="font-bold">Department:</span> {user.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </>
      </div>
    );
  } else return <></>;
};

export default Home;
