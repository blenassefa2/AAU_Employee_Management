import React from "react";
import HRExpertLayout from "@/components/Layout/HRExpertlayout";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "@/redux/slices/auth/authSlice";

const Home = () => {
  const token = useSelector(selectCurrentToken);
  return (
    // eslint-disable-next-line react/no-children-prop
    <div className="bg-white">
      <>
        <HRExpertLayout>
          {token}
          <div className="flex items-center justify-center bg-white  mt-[3rem]">
            <div className="text-black rounded border border-dark-300 ">
              <div className="bg-[#3B7CBD] py-4 text-white rounded text-center w-full">
                My Profile
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center justify-end">
                  <img
                    src="/profile-photo.jpg"
                    alt="Profile Photo"
                    className="h-40 w-40 object-cover"
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
        </HRExpertLayout>
      </>
    </div>
  );
};

export default Home;
