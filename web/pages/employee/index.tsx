import React, { useEffect } from "react";
import Layout from "@/components/Layout/HRExpertlayout";
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
  const redirectToAnotherPage = (place: string) => {
    route.push("/" + place); // Replace "/another-page" with the desired page URL
  };
  useEffect(() => {
    if (!user) {
      redirectToAnotherPage("/");
    } else if (user != "employee") {
      redirectToAnotherPage(user);
    }
  });
  if (user == "employee")
    return (
      // eslint-disable-next-line react/no-children-prop
      <div className="bg-white">
        <>
          <Layout page="employee">Here is an employee</Layout>
        </>
      </div>
    );
};

export default Home;
