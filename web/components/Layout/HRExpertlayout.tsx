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
  page: string;
};

const Layout: React.FC<HRExpertLayoutProps> = ({ children, page }) => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const route = useRouter();
  const redirectToAnotherPage = (place: string) => {
    route.push("/" + place); // Replace "/another-page" with the desired page URL
  };
  useEffect(() => {
    if (!user) {
      redirectToAnotherPage("");
    } else if (user != page) {
      redirectToAnotherPage(`${page}`);
    }
  }, []);
  if (user == page)
    return (
      <div>
        <Header />
        <div className="flex">
          <Sidebar goto={`/${page}`} />
          <main className="flex-grow  h-[90%]">{children}</main>
        </div>
      </div>
    );
  return <>redirecting</>;
};

export default Layout;
