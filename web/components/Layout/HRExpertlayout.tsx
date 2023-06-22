import React, { ReactNode, useEffect } from "react";
// import { useClient } from 'blitz';
// import { useState } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";

import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "@/redux/slices/auth/authSlice";
import { useRouter } from "next/router";

type HRExpertLayoutProps = {
  children: ReactNode;
};

const HRExpertLayout: React.FC<HRExpertLayoutProps> = ({ children }) => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const route = useRouter();
  const redirectToAnotherPage = (place: string) => {
    route.push("/" + place); // Replace "/another-page" with the desired page URL
  };
  useEffect(() => {
    if (!user) {
      redirectToAnotherPage("/");
    } else if (user == "employee") {
      redirectToAnotherPage("/employee");
    } else if (user == "statistician") {
      redirectToAnotherPage("/statistician");
    }
  }, []);
  if (user == "hrexpert")
    return (
      <div>
        <Header />
        <div className="flex">
          <Sidebar goto={"/hrexpert"} />
          <main className="flex-grow  h-[90%]">{children}</main>
        </div>
      </div>
    );
  return <>redirecting</>;
};

export default HRExpertLayout;
